const body = document.body;
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const requestAnimationFrame = window.requestAnimationFrame;


canvas.height = "495";
canvas.width = "720";
body.appendChild(canvas);

var img_land = new Image();
img_land.src = "http://www.6m5m.com/data/uploads/2017/04/29/319045903fb3418a11.jpg";
img_land.onload = function() {
    ctx.drawImage(img_land, 0, 0);
    ctx.drawImage(img_me, 0, 0, 32, 48, img_me.X, img_me.Y, 32, 48);
}

var img_me = new Image();
img_me.src = "./img/me.png";
img_me.X = 285;
img_me.Y = 0;
// img_me.onload = function() {
//     ctx.drawImage(img_me, 0, 0);
// }

body.onkeydown = function(e) {
    var left, right, up, down;
    left = right = up = down = true;
    // if (e.keyCode == 37 && img_me.X > 270) {
    //     img_me.X -= 5;
    // } else if (e.keyCode == 38 && img_me.Y > 220 - 50) {
    //     img_me.Y -= 5;
    // } else if (e.keyCode == 39 && img_me.X < 330 - 32) {
    //     img_me.X += 5;
    // } else if (e.keyCode == 40 && img_me.Y < 245 - 50) {
    //     img_me.Y += 5;
    // }
    if (img_me.Y <= 0) {
        up = false;
    } else if (img_me.Y >= 495 - 50) {
        down = false;
    }
    if (img_me.X <= 0) {
        left = false;
    } else if (img_me.X >= 720 - 30) {
        right = false;
    }
    if (img_me.X < 270) {
        if (img_me.Y < 220 - 50) {
            left = false;
            up = false;
        } else if (img_me.Y > 245 - 50) {
            left = false;
            down = false;
        }
    } else if (img_me.X > 330 - 30) {
        if (img_me.Y < 220 - 50) {
            right = false;
            up = false;
        } else if (img_me.Y > 245 - 50) {
            right = false;
            down = false;
        }
    }
    move(e.keyCode, left, right, up, down);
    ctx.clearRect;
    ctx.drawImage(img_land, 0, 0);
    ctx.drawImage(img_me, 0, 0, 32, 48, img_me.X, img_me.Y, 32, 48);
}

function move(keycode, left, right, up, down) {
    if (keycode == 37 && left) {
        img_me.X -= 5;
    } else if (keycode == 38 && up) {
        img_me.Y -= 5;
    } else if (keycode == 39 && right) {
        img_me.X += 5;
    } else if (keycode == 40 && down) {
        img_me.Y += 5;
    }
}