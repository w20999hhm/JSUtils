/**
 * Created by WK on 2016/3/2.
 */
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

(function (gameUtils) {

    gameUtils.calLength2 = function (x1, y1, x2, y2) {
        return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    }


    gameUtils.randomColor = function () {
        var col = [0, 1, 2];
        col[0] = Math.random() * 100 + 155;
        col[0] = col[0].toFixed();
        col[1] = Math.random() * 100 + 155;
        col[1] = col[1].toFixed();
        col[2] = Math.random() * 100 + 155;
        col[2] = col[2].toFixed();
        var num = Math.floor(Math.random() * 3);
        col[num] = 0;
        return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
    }

    gameUtils.lerpAngle = function (a, b, t) {
        var d = b - a;
        if (d > Math.PI) d = d - 2 * Math.PI;
        if (d < -Math.PI) d = d + 2 * Math.PI;
        return a + d * t;
    }
    gameUtils.lerpDistance = function (aim, cur, ratio) {
        var delta = cur - aim;
        return aim + delta * ratio;
    }

    gameUtils.inOboundary = function (arrX, arrY, l, r, t, b) { //在l r t b范围内的检测
        return arrX > l && arrX < r && arrY > t && arrY < b;
    }

    gameUtils.rgbColor = function (r, g, b) {
        r = Math.round(r * 256);
        g = Math.round(g * 256);
        b = Math.round(b * 256);
        return "rgba(" + r + "," + g + "," + b + ",1)";
    }

    gameUtils.rgbNum = function rgbNum(r, g, b) {
        r = Math.round(r * 256);
        g = Math.round(g * 256);
        b = Math.round(b * 256);
        return "rgba(" + r + "," + g + "," + b;
    }

    gameUtils.rnd = function (m) {
        var n = m || 1;
        return Math.random() * n;
    }

    gameUtils.rateRandom = function (m, n) {
        var sum = 0;
        for (var i = 1; i < (n - m); i++) {
            sum += i;

        }

        var ran = Math.random() * sum;

        for (var i = 1; i < (n - m); i++) {
            ran -= i;
            if (ran < 0) {
                return i - 1 + m;
            }
        }
    }

    gameUtils.distance = function (x1, y1, x2, y2, l) {
        var x = Math.abs(x1 - x2);
        var y = Math.abs(y1 - y2);
        if (x < l && y < l) {
            return true;
        }
        return false;
    }

    gameUtils.AABBbox = function (object1, w1, h1, object2, w2, h2, overlap) {
        A1 = object1.x + overlap;
        B1 = object1.x + w1 - overlap;
        C1 = object1.y + overlap;
        D1 = object1.y + h1 - overlap;

        A2 = object2.x + overlap;
        B2 = object2.x + w2 - overlap;
        C2 = object2.y + overlap;
        D2 = object2.y + h2 - overlap;

        if (A1 > B2 || B1 < A2 || C1 > D2 || D1 < C2) return false;
        else return true;
    }


    gameUtils.dis2 = function (x, y, x0, y0) {
        var dx = x - x0;
        var dy = y - y0;
        return dx * dx + dy * dy;
    }

    gameUtils.rndi2 = function (m, n) {
        var a = Math.random() * (n - m) + m;
        return Math.floor(a);
    }
})(window.gameUtils = {})
