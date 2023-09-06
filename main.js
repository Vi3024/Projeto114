function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
}

function draw() {

}

function takeSnapshot() {
    save('myFilterImage.png');
}
