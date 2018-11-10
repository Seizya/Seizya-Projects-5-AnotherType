// - point --------------------------------------------------------------------
function Point() {
    this.x = 0;
    this.y = 0;
}

Point.prototype.distance = function (p) {
    var q = new Point();
    q.x = p.x - this.x;
    q.y = p.y - this.y;
    return q;
};

function distancez(p1, p2) {
    var q = new Point();
    q.x = p1.x - p2.x;
    q.y = p1.y - p2.y;
    return q;
};

Point.prototype.distances = function (p1, p2) {
    var q = new Point();
    q.x = p1 - this.x;
    q.y = p2 - this.y;
    return q;
};

function distanse(p1, p2,p3,p4) {
    var q = new Point();
    q.x = p1 - p3;
    q.y = p2 - p4;
    return q;
};

function distanses(p1, p2,p3) {
    var q = new Point();
    q.x = p1.x - p2;
    q.y = p1.y - p3;
    return q;
};

Point.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.normalize = function () {
    var i = this.length();
    if (i > 0) {
        var j = 1 / i;
        this.x *= j;
        this.y *= j;
    }
};