/**
 * Created by WK on 2016/3/2.
 */
(function (u) {

    //获取URL参数
    u.getParame = function (name) {
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
    u.getTime = function (input) {
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
	
	 //验证手机号码是否合法
    u.isMobile = function (value) {
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return mobile.test(value)
    }

    // 验证密码是否复合安全要求
    u.validPassword = function (value) {
        var regex = /^(?![^a-zA-Z]+$)(?!\D+$).{6,18}$/;
        return regex.test(value);
    }
	
	//URL参数编码
	u.urlParamsEncode = function (param, key, encode) {
        if (param == null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += u.urlParamsEncode(param[i], k, encode);
            }
        }
        return paramStr;
    };

})(window.utils = {})