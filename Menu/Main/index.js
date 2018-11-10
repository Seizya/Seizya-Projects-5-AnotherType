function giveCSS(id) {
    var element = document.getElementById(id);
    var style = document.defaultView.getComputedStyle(element, '');
    return style;
}

function getCSS(id, name) {
    return getCSSById(document.getElementById(id), name);
}

function getCSSById(element, name) {
    return parseFloat(window.getComputedStyle(element).getPropertyValue(name))
}

function right_transition(id) {
    return parseFloat(window.getComputedStyle(document.getElementById("right")).getPropertyValue("transition-" + id)) * 1000
}

function CSS(elements) {
    if (typeof elements == "string") {
        // Parse as querySelector
        elements = document.querySelectorAll(elements);
    }
    elements = Array.from(elements);
    // window.getComputedStyle(element).getPropertyValue(name);
    return new Proxy({}, {
        get: function (target, name) {
            return elements.map(function (element) {
                return window.getComputedStyle(element).getPropertyValue(name);
            })
        },
        set: function (target, name, value) {
            var errors = elements.map(function (element) {
                try {
                    element.style[name] = value;
                } catch (e) {
                    return e;
                }
                return undefined;
            });
            if (errors.reduce(function (pv, cv) {
                    return pv + (cv ? 1 : 0);
                }, 0) == 0) return true;
            throw errors;
        }
    });
}