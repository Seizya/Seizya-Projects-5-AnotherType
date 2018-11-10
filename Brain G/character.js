// - character ----------------------------------------------------------------
function Character() {
    this.position = new Point();
    this.size = 0;
}

Character.prototype.init = function (size) {
    this.size = size;
};
// CharaShot0-------------------------
function CharaShot0() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

CharaShot0.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
CharaShot0.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// CharaShot1-------------------------
function CharaShot1() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

CharaShot1.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
CharaShot1.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// CharaShot2-------------------------
function CharaShot2() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

CharaShot2.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
CharaShot2.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
}; // CharaShot3-------------------------
function CharaShot3() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

CharaShot3.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
CharaShot3.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// CharaShot4-------------------------
function CharaShot4() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

CharaShot4.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
CharaShot4.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// - enemy-------------------------------------------------------------
function Enemy() {
    this.position = new Point();
    this.size = 100;
    this.type = 0;
    this.param = 0;
    this.alive = false;
}

Enemy.prototype.set = function (p, size, type) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.type = type;
    this.param = 0;
    this.alive = true;
};

Enemy.prototype.move = function () {
    this.param++;
    switch (this.type) {
        case 0:
            this.position.x += 3;
            if (this.position.x > this.size + screenCanvas.width)
                this.alive = false;
            break;
        case 1:
            this.position.x -= 3;
            if (this.position.x < -this.size)
                this.alive = false;
            break;
    }
};
// enemy shot-------------------------
function EnemyShot() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

EnemyShot.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.vector.x = vector.x;
    this.vector.y = vector.y;
    this.size = size;
    this.speed = speed;
    this.alive = true;
};

EnemyShot.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
//BOSS----------------------------------------------------------------------------------------------------------------------------------------
function Boss() {
    this.position = new Point();
    this.size = 100;
    this.type = 0;
    this.param = 0;
    this.alive = false;
}

Boss.prototype.set = function (p, size /*, type*/ ) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    /* this.type = type;*/
    this.param = 0;
    this.alive = true;
};

Boss.prototype.move = function () {}
// boss shot0-------------------------
function BossShot0() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot0.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot0.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot1-------------------------
function BossShot1() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot1.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot1.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot2-------------------------
function BossShot2() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot2.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot2.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot3-------------------------
function BossShot3() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot3.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot3.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot4-------------------------
function BossShot4() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot4.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot4.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot5-------------------------
function BossShot5() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot5.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot5.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};
// boss shot6-------------------------
function BossShot6() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
}

BossShot6.prototype.set = function (p, vector, size, speed) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
};
BossShot6.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
}
//Skillbuild-------------------------
function Skillbuild() {
    this.position = new Point();
    this.vector = new Point();
    this.size = 0;
    this.speed = 0;
    this.alive = false;
    this.place = 0;
}

Skillbuild.prototype.set = function (p, vector, size, speed, place) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speed = speed;
    this.vector = vector;
    this.alive = true;
    this.place = place;
};
Skillbuild.prototype.move = function () {
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    };
};