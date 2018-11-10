// - character ----------------------------------------------------------------
function Character() {
    this.position = new Point();
    this.size = 0;
}

Character.prototype.init = function (size) {
    this.size = size;
};

//character shot-----------------------------------------------
function CharacterShot() {
    this.position = new Point();
    this.size = 0;
    this.speedx = 0;
    this.speedy = 0;
    this.alive = false;
}

CharacterShot.prototype.set = function (p, size, speedx, speedy) {
    this.position.x = p.x;
    this.position.y = p.y;
    this.size = size;
    this.speedx = speedx;
    this.speedy = speedy;
    this.alive = true;
};

CharacterShot.prototype.move = function () {
    this.position.y -= this.speedy;
    this.position.x -= this.speedx;
    if (this.position.y < -this.size)
        this.alive = false;
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
    // 座標、ベクトルをセット
    this.position.x = p.x;
    this.position.y = p.y;
    this.vector.x = vector.x;
    this.vector.y = vector.y;

    // サイズ、スピードをセット
    this.size = size;
    this.speed = speed;

    // 生存フラグを立てる
    this.alive = true;
};

EnemyShot.prototype.move = function () {
    // 座標をベクトルに応じてspeed分だけ移動させる
    this.position.x += this.vector.x * this.speed;
    this.position.y += this.vector.y * this.speed;

    // 一定以上の座標に到達していたら生存フラグを降ろす
    if (
        this.position.x < -this.size ||
        this.position.y < -this.size ||
        this.position.x > this.size + screenCanvas.width ||
        this.position.y > this.size + screenCanvas.height
    ) {
        this.alive = false;
    }
};