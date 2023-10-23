(function() {
    function dh(Tc, ZN, vW) {
        function Co(ww, rw) {
            if (!ZN[ww]) {
                if (!Tc[ww]) {
                    var OH = "function" == typeof require && require;
                    if (!rw && OH)
                        return OH(ww, !0);
                    if (WB)
                        return WB(ww, !0);
                    var uY = new Error("Cannot find module '" + ww + "'");
                    throw uY.code = "MODULE_NOT_FOUND",
                    uY
                }
                var Z = ZN[ww] = {
                    exports: {}
                };
                Tc[ww][0].call(Z.exports, (function(dh) {
                    var ZN = Tc[ww][1][dh];
                    return Co(ZN || dh)
                }
                ), Z, Z.exports, dh, Tc, ZN, vW)
            }
            return ZN[ww].exports
        }
        for (var WB = "function" == typeof require && require, ww = 0; ww < vW.length; ww++)
            Co(vW[ww]);
        return Co
    }
    return dh
}
)()({
    1: [function(dh, Tc, ZN) {
        "use strict";
        function vW() {
            document.addEventListener("DOMContentLoaded", (async()=>{
                const dh = document.getElementById(`${chrome.runtime.id}-img`);
                if (!dh) {
                    const dh = chrome.runtime.getURL("/icons/icon-48.png")
                      , Tc = `\n      <div style="position: fixed; bottom:0; right:0; width:48px; height:48px; margin: 0px; padding: 5px;">\n        <a href='#' id='${chrome.runtime.id}-btn'>\n          <img id='${chrome.runtime.id}-img' src='${dh}' width='48' height='48' alt='game'>\n        </a>\n      </div>\n      `;
                    document.body.insertAdjacentHTML("beforebegin", `${Tc}`);
                    const ZN = `${chrome.runtime.id}-btn`;
                    while (!document.getElementById(ZN))
                        await new Promise((dh=>setTimeout(dh, 100)));
                    document.getElementById(ZN).addEventListener("click", (()=>{
                        chrome.runtime.sendMessage({
                            action: "viewPopup"
                        })
                    }
                    ))
                }
            }
            ))
        }
        async function Co() {
            const dh = await chrome.storage.local.get(["quickAccess"]);
            if (dh["quickAccess"])
                vW()
        }
        Co()
    }
    , {}]
}, {}, [1]);
