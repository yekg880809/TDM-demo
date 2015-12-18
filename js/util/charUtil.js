define(["jquery", "logUtil"], function($, logUtil) {

    return {
        toHumpType: function(chars) {
            // logUtil.log(chars);
            if (chars.indexOf('-') < 0) {
                return chars;
            }

            chars = chars.replace(/\-\w/g, function(word) {
                return word.slice(1).toUpperCase();
            });

            return chars;
        },
        url2Obj: function(url) {
            var result = {};
            var exec = url.split('/');
            result.type = exec[0];
            result.id = exec[1];

            // logUtil.log(result.type + ":" + result.id);
            return result;
        }
    };


});