"use strict";

function initialize(){
    /*** [ Configuration ] ***/
    var clientParams = {
        name : "radiopopularPt",
        language : ""
    };
    var variants = {
        "A": { value : 100}
    };
    var version = 1;
    /*** [ end - Configuration ] ***/
    
    /*** [ Loader ] ***/
    var scriptSrc = "//ui.swogo.com";
    if ( window.location.href.indexOf("swogo-disable") >=0 )  console.log("Swogo-LOG","Live script disabled.");
    removeExpiredVariants(variants);
    clientParams.variant = setVariant(variants,version);
    scriptSrc += "/"+clientParams.name+((clientParams.language)?"/"+clientParams.language:"")+"/"+clientParams.variant+"/swogo.js";
    appendScript(scriptSrc);


    function appendScript (scriptSrc) {
        if(!scriptSrc) return console.error("No swogo client script found for this language and variant");
        var script = document.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = scriptSrc;
        document.querySelector("body").appendChild(script);
    }

    function removeExpiredVariants (variantsObj) {
        var nowDate = new Date();
        for(var variantName in variantsObj){
            var variantObj = variantsObj[variantName];
            if (variantObj.expireDate && new Date(variantObj.expireDate) <= nowDate) delete variantsObj[variantName];
        }
    }

    function setVariant (variantsObj, version) {
        var cVariant = getCookie("sw_var");
        var cVersion = getCookie("sw_var_ver") || -1;
        var variantsKey = Object.keys(variantsObj);
        var sumArray = 0;
        var acc = 0;
        variantsKey.reduce(function(a, b){return sumArray = sumArray + variantsObj[b].value}, 0);
        var randomVar = Math.random()*sumArray;
        for(var variantName in variantsObj){
            var variantObj = variantsObj[variantName];
            acc += variantObj.value;
            if(acc >= randomVar) break;
        }
        if( cVariant && cVersion && (version == cVersion) ){
            return cVariant;
        } else {
            setCookie("sw_var", variantName, 1);
            setCookie("sw_var_ver", version, 1);
            return variantName;
        }
    }

    function setCookie (cookieName, cookieValue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        document.cookie = cookieName + "=" + cookieValue + ";" + "expires=" + d.toUTCString() + ";path=/";
    }

    function getCookie (cookieName) {
        var cookieArray = decodeURIComponent(document.cookie).split(';');
        for(var i = 0; i < cookieArray.length; i++) {
            var c = cookieArray[i];
            while (c.charAt(0) == ' '){c = c.substring(1);}
            if (c.indexOf(cookieName + "=") == 0) return c.substring((cookieName + "=").length, c.length);
        }
        return null;
    }

    function searchURL (string, success, fail) {
        return (window.location.href.indexOf(string) > -1) ? success : fail; // replace with findMatch function
    }
}

/* load swogo at the right time */
if (document.readyState === 'interactive' || document.readyState === 'complete') initialize();
else document.addEventListener('DOMContentLoaded', initialize);