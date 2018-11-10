var LOGGER_Map = new Map();
var LOGGER_shownLogGroupName = "main";

function setLogger(logElm, maxLen, log2console = true) {
    var padLeft = (str, len, pad) => pad.charAt(0).repeat(len - str.length) + str;
    var timeFormat = (date) => {
        var h = padLeft(date.getHours().toString(), 2, " ");
        var min = padLeft(date.getMinutes().toString(), 2, " ");
        var s = padLeft(date.getSeconds().toString(), 2, " ");
        return h + ":" + min + ":" + s;
    };
    var result = (group, ...objects) => {
        if (log2console) console.log(objects.length == 1 ? objects[0] : objects);
        var output = "";
        if (!LOGGER_Map.has(group)) {
            LOGGER_Map.set(group, "");
            console.log(":: LOGGER :: < New group added: " + group + ">");
        }
        output = LOGGER_Map.get(group).split("\n");
        var prefix = `${timeFormat(new Date())}`;
        var blanks = " ".repeat(prefix.length);
        for (let i = 0; i < objects.length; i++) {
            const obj = objects[i];
            var appendText = "";
            if (typeof obj == "string") appendText = obj;
            else if (typeof obj == "object") {
                for (const key in obj)
                    if (obj.hasOwnProperty(key))
                        appendText += `[${key}|${JSON.stringify(obj[key])}]`;
            } else appendText = JSON.stringify(obj);
            output.unshift(`${i == 0 ? prefix : blanks} ${appendText}`);
            // output.push(`${i == 0 ? prefix : blanks} ${appendText}`);
        }
        output = output.slice(0, maxLen);
        LOGGER_Map.set(group, output.join("\n"));
        if (group == LOGGER_shownLogGroupName)
            logElm.innerText = ":: " + LOGGER_shownLogGroupName + " ::\n" +
            (LOGGER_Map.has(LOGGER_shownLogGroupName) ? LOGGER_Map.get(LOGGER_shownLogGroupName) : "[[ ログはない ]]");

        // logElm.innerText = output.slice(Math.max(0, output.length - maxLen)).join("\n");
    }
    result.setGroup = (group) => {
        LOGGER_shownLogGroupName = group;
        logElm.innerText = ":: " + LOGGER_shownLogGroupName + " ::\n" +
            (LOGGER_Map.has(LOGGER_shownLogGroupName) ? LOGGER_Map.get(LOGGER_shownLogGroupName) : "[[ ログはない ]]");
    }
    return result;
}