var smallCircle = /** @class */ (function () {
    function smallCircle(radius) {
        var _this = this;
        this.getSmailRadius = function () { return _this.radius; };
        this.radius = radius;
    }
    return smallCircle;
}());
var bigCircle = /** @class */ (function () {
    function bigCircle(radius) {
        var _this = this;
        this.getBigRadius = function () { return _this.radius; };
        this.radius = radius;
    }
    return bigCircle;
}());
var small = new smallCircle(5);
var big = new bigCircle(9);
var distance = Math.sqrt(Math.pow(24, 2) + Math.pow((big.getBigRadius() - small.getSmailRadius()), 2));
console.log(distance);
