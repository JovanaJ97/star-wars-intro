// Selectors
const audio = document.getElementById('song');
const audio2 = document.querySelector('.lightsaber');
const startBtn = document.getElementById('start-btn');
const replayBtn = document.getElementById('replay-btn');
const wrapper = document.querySelector('.wrapper');
const blueText = document.querySelector('.blue-text');
const logo = document.querySelector('.logo');
const movingText = document.querySelector('.text-wrap .inside-wrap');

// Functions
const playSong = () => {
	blueText.classList.add('text-visible');
	audio.play();
};

const showLogo = () => {
	logo.classList.add('logo-visible');
};

const showMovingText = () => {
	movingText.classList.add('moving-visible');
};

const showReplay = () => {
	replayBtn.classList.add('replay-show');
};

// Events
replayBtn.addEventListener('click', () => {
	wrapper.classList.add('wrapper-visible');
	replayBtn.classList.remove('replay-show');

	blueText.classList.remove('text-visible');
	logo.classList.remove('logo-visible');
	movingText.classList.remove('moving-visible');

	for (let i = 0; i < 2500; i++) {
		const dot = document.createElement('div');
		dot.classList.add('white-dot');
		document.body.appendChild(dot);

		const randomX = Math.floor(Math.random() * 2500);
		const randomY = Math.floor(Math.random() * 2500);
		const randomDelay = Math.floor(Math.random() * 6000);

		dot.style.left = `${randomX}px`;
		dot.style.top = `${randomY}px`;
		dot.style.animationDelay = `${randomDelay}ms`;
	}

	setTimeout(playSong, 1000);
	setTimeout(showLogo, 6000);
	setTimeout(showMovingText, 1500);
});

startBtn.addEventListener('click', () => {
	wrapper.classList.add('wrapper-visible');
	startBtn.classList.add('start-remove');
	audio2.play();

	for (let i = 0; i < 2500; i++) {
		const dot = document.createElement('div');
		dot.classList.add('white-dot');
		document.body.appendChild(dot);

		const randomX = Math.floor(Math.random() * 2500);
		const randomY = Math.floor(Math.random() * 2500);
		const randomDelay = Math.floor(Math.random() * 6000);

		dot.style.left = `${randomX}px`;
		dot.style.top = `${randomY}px`;
		dot.style.animationDelay = `${randomDelay}ms`;
	}

	setTimeout(playSong, 1000);
	setTimeout(showLogo, 6000);
	setTimeout(showMovingText, 1500);
});

setTimeout(showReplay, 60000);
