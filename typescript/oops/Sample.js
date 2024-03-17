var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.add = function (a, b) {
        var res = a + b;
        return res;
    };
    return Sample;
}());
var sampleObj = new Sample();
var res = sampleObj.add(10, 15); //method will return the value;
console.log(res);
