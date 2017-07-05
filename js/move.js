function move(keycode, left, right, up, down) {
    if (keycode == 37 && left) {
        img_me.X -= 5;
        direction = 48
    } else if (keycode == 38 && up) {
        img_me.Y -= 5;
        direction = 144;
    } else if (keycode == 39 && right) {
        img_me.X += 5;
        direction = 96;
    } else if (keycode == 40 && down) {
        img_me.Y += 5;
        direction = 0;
    }
}