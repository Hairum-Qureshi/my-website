const button = document.querySelector("button");
const secretMsgPTag = document.querySelector("#secretMessage");
let showMsg = false;

const specialMsgs = [
	"🌱 Go touch grass 🌱",
	"Shh… don't tell anyone, but this button does nothing important",
	"Remember: licking doorknobs is illegal on other planets",
	"Achievement unlocked: Professional Button Presser 🏆",
	"console.log('Hello from the other side!')",
	"You pressed the button. That's O(1) efficiency right there",
	"Congrats. You just wasted 0.2 seconds of your life",
	"Stop pressing this button. Seriously. Nothing new will happen… probably.",
	"The real secret message is inside your heart ❤️",
	"01010011 01100101 01100011 01110010 01100101 01110100",
	"The cake is a lie"
];

button.addEventListener("click", () => {
	if (!showMsg) {
		showMsg = true;
		secretMsgPTag.textContent =
			specialMsgs[Math.floor(Math.random() * specialMsgs.length)];
		button.textContent = "Hide Me!";
	} else {
		showMsg = false;
		secretMsgPTag.textContent = "";
		button.textContent = "Press Me!";
	}
});
