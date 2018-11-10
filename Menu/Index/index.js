/*
このスクリプトは、どのスクリプトよりも早く読み込まれるようにしてください。

importタグを追加します。
例えば、<import src="./button.html" /> とすれば、 ./button.html の内容でそのタグが置き換えられます。
なお、標準では、最初にページが読み込まれたときにのみ import タグの置き換えがされます。
もし、それ以外のタイミングで import タグの解釈をさせたい場合、 importHTMLs 関数を引数無しで読んでください。

このスクリプトが読み込まれてから window の load イベントが発火するまでに追加された load イベントハンドラーは、importHTMLs 実行後に呼び出されます。

*/
(() => {
    var listeners = [];
    const tmp = window.addEventListener;
    window.addEventListener("load", (...args) => {
        importHTMLs().then(()=>{
        listeners.forEach(_ => _[0](...args));
        listeners.forEach(_ => tmp("load",...args));
        listeners = [];
    });
        window.addEventListener = tmp;
    });
    window.addEventListener = (type, ...args) => {
        if (type == "load") listeners.push(args);
        else tmp(type, ...args);
    }
})();
function importHTMLs() {
    const warn = (..._) => console.warn("[importHTMLs] ", ..._); return Promise.all(Array.from(document.getElementsByTagName("import")).map(_ => {
        const path = _.getAttribute("src");
        if (!path) {
            warn("srcに読み込みたいファイルパスが指定されていないimportタグがありました。とりあえず無視しときました。");
            return;
        }
        return fetch(path)
            .then(res => res.text())
            .then(text => _.outerHTML = text)
            .catch(err => warn(path + " の読み込みでエラーが起きました。詳細は……", err));
    }));
}