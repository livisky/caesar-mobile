var statics,server;
var staticsBase=statics||'http://statics.shipin7.com/statics';
var serverBase=server||'http://shopmanage.shipin7.com';

var staticPath = staticsBase+"/admin/", 
jsSrc = staticPath + "js/"; (location.href.indexOf("&debug=true") > -1 || location.href.indexOf("?debug=true") > -1) && (jsSrc = staticPath + "src/js/"),
seajs.config({
    paths: {
        business: jsSrc + "business",
        common: jsSrc + "common",
        pageCommon: jsSrc + "pageCommon"
    }
});