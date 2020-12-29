const dayLength = 30; // Duration of the day in real seconds

timeStep = 1;
isPaused = 1;

const initialDateTime = moment("January 1, 2020 00:00:00");
var currentDate = initialDateTime;

var i = 1;
function everyMinute() {
	if (!isPaused && !((i * 10000) % (timeStep * 10000))) {
		currentDate = currentDate.add(1, "minutes");
	}
	i++;
}

var timer = setInterval(everyMinute, dayLength * 0.000694444 * 1000 * timeStep);

function timeControl(mode = 1) {
	if (mode == 0) {
		isPaused = 1;
	} else {
		isPaused = 0;
		timeStep = 1 / (mode / 5);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	pauseButton = createButton("⏸");
	pauseButton.position(10, windowHeight / 2);
	pauseButton.mousePressed(function () {
		timeControl(0);
	});

	playButton = createButton("⏵");
	playButton.position(60, windowHeight / 2);
	playButton.mousePressed(function () {
		timeControl(1);
	});

	fastButton = createButton("⏭");
	fastButton.position(110, windowHeight / 2);
	fastButton.mousePressed(function () {
		timeControl(10);
	});
}

function draw() {
	background(220);
	textSize(32);
	text(currentDate.format("MM-DD-YYYY hh:mm"), 10, 30);
	fill(0, 102, 153);
}
