const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!nameInput.value || !emailInput.value || !messageInput.value) {
		const errorDiv = document.createElement('div');
		errorDiv.classList.add('error');
		errorDiv.innerText = 'Please fill out all fields.';
		form.insertBefore(errorDiv, form.firstChild);
	} else {
		form.submit();
	}
});

nameInput.addEventListener('input', () => {
	removeError();
});

emailInput.addEventListener('input', () => {
	removeError();
});

messageInput.addEventListener('input', () => {
	removeError();
});

function removeError() {
	const errorDiv = document.querySelector('.error');
	if (errorDiv) {
		errorDiv.remove();
	}
}
