const svgCircleProgressBar = document.querySelector('.progress__gpraph');
const checkBoxAnimate = document.querySelector('.data_animate');
const checkBoxHide = document.querySelector('.data_hide')
const allProgressiveBar = document.querySelector('.wrapper-progress')
const valueProgressive = document.querySelector('.data_value')
const svgCircles = document.querySelector('.circle')

// Добавление анимации 
function startAnimation() {
	svgCircleProgressBar.classList.toggle('animate', checkBoxAnimate.checked)
}
checkBoxAnimate.addEventListener('change', startAnimation)
//--------------------

//Скрытие блока прогресса
function hideBar() {
	svgCircles.classList.toggle('hidden', checkBoxHide.checked)
}
checkBoxHide.addEventListener('change', hideBar)
//--------------------

//Получения значения для круга и проверка его диапазона
function enterValue() {
	let enteredValue = valueProgressive.value;
	const radiusCircle = 377;
	if (enteredValue > 100) {
		enteredValue = 100
		valueProgressive.value = enteredValue
		svgCircleProgressBar.style = `stroke-dashoffset: calc(${radiusCircle} - (${radiusCircle} * ${enteredValue}) / 100)`
	} else if (enteredValue < 0){
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
//--------------------

//Недо АПИ?
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
//--------------------
