const button = document.querySelector("#alertButton");

const randomMessages = [
	"Hello!",
	"Welcome!",
	"Have a great day!",
	"Enjoy your visit!"
];

button.addEventListener("click", () => {
	alert(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
});
