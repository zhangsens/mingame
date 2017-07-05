var walk = 0;
var direction = 0;

function walk_animate() {
    if (walk > 32 * 2) {
        walk = 0;
    } else {
        walk += 32;
    }
    ctx.drawImage(img_me, walk, direction, 32, 48, img_me.X, img_me.Y, 32, 48);
    setTimeout(walk_animate, 250);
}