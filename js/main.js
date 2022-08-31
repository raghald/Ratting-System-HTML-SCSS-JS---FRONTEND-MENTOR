const btns = document.querySelectorAll('.bottom-front__btn-item');
const btnSubmit = document.querySelector('.bottom-front__btn');
const frontCard = document.querySelector('.front');
const oppositeCard = document.querySelector('.opposite');
const result = document.querySelector('.top-opposite__result');
const error = document.querySelector('.bottom-front__error');

let ratingValue;
console.log(ratingValue);

const ratingEngine = e => {
	ratingValue = Number(e.target.textContent);
	console.log(ratingValue);

		error.style.display = 'none';

	result.textContent = `You selected out ${ratingValue} of 5`;
};

const Sumbit = () => {
	if (ratingValue >= 1 && ratingValue <= 5) {
		frontCard.style.display = 'none';
		oppositeCard.style.display = 'block';
	} else {
		error.style.display = 'block';
	}
};

btns.forEach(btn => btn.addEventListener('click', ratingEngine));
btnSubmit.addEventListener('click', Sumbit);
