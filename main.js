const svgCircleProgressBar = document.querySelector('.progress__graph')
const svgCircleProgressBarBorder = document.querySelector('.progress__graph_border')
const checkBoxAnimate = document.querySelector('.data_animate')
const checkBoxHide = document.querySelector('.data_hide')
const allProgressiveBar = document.querySelector('.wrapper-progress')
const valueProgressive = document.querySelector('.data_value')
const svgCircle = document.querySelector('.circle')
const svgCircleBorder = document.querySelector('.circle-border')
let intervalId = null

function animationInterval(value) {
	if (value) {
		svgCircleProgressBarBorder.classList.add('animate')
		setTimeout(() => {
			svgCircleProgressBarBorder.classList.remove('animate')
		}, 2000)
		intervalId = setInterval(() => {
			svgCircleProgressBarBorder.classList.add('animate')
			setTimeout(() => {
				svgCircleProgressBarBorder.classList.remove('animate')
			}, 2000)
		}, 4000)
	} else {
		svgCircleProgressBarBorder.classList.remove('animate')
		clearInterval(intervalId)
	}
}

function startAnimation() {
	animationInterval(checkBoxAnimate.checked) 
}

checkBoxAnimate.addEventListener('change', startAnimation)

function hideBar() {
	svgCircle.classList.toggle('hidden', checkBoxHide.checked)
	svgCircleBorder.classList.toggle('hidden', checkBoxHide.checked)
}
checkBoxHide.addEventListener('change', hideBar)

function enterValue(event) {
	let enteredValue = event.target.value
	const radiusCircle = 377
	if (enteredValue > 100) {
		enteredValue = 100
		valueProgressive.value = enteredValue
		svgCircleProgressBar.style = `stroke-dashoffset: calc(${radiusCircle} - (${radiusCircle} * ${enteredValue}) / 100)`
	} else if (enteredValue < 0) {
		enteredValue = 0
		valueProgressive.value = enteredValue
		svgCircleProgressBar.style = `stroke-dashoffset: calc(${radiusCircle} - (${radiusCircle} * ${enteredValue}) / 100)`
	} else if (enteredValue === '') {
		svgCircleProgressBar.style = `stroke-dashoffset: calc(${radiusCircle} - (${radiusCircle} * 0) / 100)`
	} else {
		svgCircleProgressBar.style = `stroke-dashoffset: calc(${radiusCircle} - (${radiusCircle} * ${enteredValue}) / 100)`
	}
}
valueProgressive.addEventListener('change', enterValue)

function stateEnterValue(value) {
	valueProgressive.value = value
	enterValue(value)
}

function stateAnimation() {
	checkBoxAnimate.checked = !checkBoxAnimate.checked
	startAnimation()
}

function stateVisibilityBlock() {
	checkBoxHide.checked = !checkBoxHide.checked
	hideBar()
}
