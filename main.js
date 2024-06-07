const svgCirclePrgGrph = document.querySelector('.progress__gpraph');
const checkBoxAnimate = document.querySelector('.data_animate');
const checkBoxHide = document.querySelector('.data_hide')
const allProgressiveBar = document.querySelector('.wrapper-progress')
const valueProgressive = document.querySelector('.data_value')
const svgCircles = document.querySelector('.circles')

// Добавление анимации 
function startAnimation() {
	svgCirclePrgGrph.classList.toggle('animate', checkBoxAnimate.checked)
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
	let value = valueProgressive.value
	if (value > 100) {
		value = 100
		valueProgressive.value = value
		svgCirclePrgGrph.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
	} else if (value < 0) {
		value = 0
		valueProgressive.value = value
		svgCirclePrgGrph.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
	} else {
		svgCirclePrgGrph.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
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
