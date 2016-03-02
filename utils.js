/**
 * Created by WK on 2016/3/2.
 */
(function (utils) {

    //获取URL参数
    utils.getParame = function (name) {
        var code = '';
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            code = unescape(r[2]);
            return code;
        } else {
            return code;
        }
    }

    //转化时间格式
    utils.getTime = function (input) {
        if (input) {
            var date = new Date(input);
            var seperator1 = "-";
            var seperator2 = ":";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate
            return currentdate;
        } else {
            return '';
        }
    }
})
(window.utils = {})