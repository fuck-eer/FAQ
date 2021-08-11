const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrowimgclass");
const data = document.querySelector(".data");

data.addEventListener("click", (e) => {
	if (
		e.target.className == "question" ||
		e.target.className == "quetext" ||
		e.target.className == "ArrowIndicator"
	) {
		// console.log(e.target);
		let doubt;
		if (
			e.target.className == "quetext" ||
			e.target.className == "ArrowIndicator"
		) {
			doubt = e.target.parentElement.parentElement;
		} else {
			doubt = e.target.parentElement;
		}
		const arrow = doubt.childNodes[1].childNodes[1].childNodes[1].classList;
		const answerClasses = doubt.childNodes[3].classList;
		console.log(doubt);
		console.log(arrow);
		if (answerClasses.length > 1) {
			answerClasses.remove("noDisp");
			arrow.remove("arrowimgclassdown");
		} else {
			answerClasses.add("noDisp");
			arrow.add("arrowimgclassdown");
		}
	}
});

const expandAll = () => {
	arrows.forEach((e) => {
		e.classList.remove("arrowimgclassdown");
	});
	answers.forEach((e) => {
		e.classList.remove("noDisp");
	});
};

const collapseAll = () => {
	arrows.forEach((e) => {
		e.classList.add("arrowimgclassdown");
	});
	answers.forEach((e) => {
		e.classList.add("noDisp");
	});
};

document.getElementById("expand").addEventListener("click", expandAll);
document.getElementById("collapse").addEventListener("click", collapseAll);
