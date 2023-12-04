const { PI } = Math;

function toUppercase(string) {
    return string.toUppercase();
}

exports.area = function (r) {
    return PI * r ** 2;
}

exports.area = (r) => PI * r ** 2;

exports.circumference = () => 2 * PI * r;

exports.database = "Level_5";

exports.toUppercase = toUppercase;
