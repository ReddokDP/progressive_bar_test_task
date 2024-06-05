const svgCircle = document.querySelector('.progress__gpraph');
const checkBoxAnimate = document.querySelector('.data_animate');
const checkBoxHide = document.querySelector('.data_hide')
const allProgressiveBar = document.querySelector('.wrapper-progress')
const valueProgressive = document.querySelector('.data_value')

// Ограничение input number от 0 до 100


//--------------------


// Добавление анимации 
checkBoxAnimate.addEventListener('change', function(e){
    if (checkBoxAnimate.checked) {
        svgCircle.classList.add('animate')
    } else {
        svgCircle.classList.remove('animate')
    }
})
//--------------------

//Скрытие блока прогресса
function hideBar() {
    if (checkBoxHide.checked) {
	    allProgressiveBar.style = 'display: none'
	}
}
checkBoxHide.addEventListener('change', hideBar)
//--------------------


//Получения значения для круга
valueProgressive.addEventListener('keyup', e => {
	if (e.code === 'Enter') {
        let value = valueProgressive.value
        if (value > 100) {
            value = 100
            valueProgressive.value = value
            svgCircle.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
        } else if (value < 0) {
            value = 0
            valueProgressive.value = value
            svgCircle.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
        } else {
            svgCircle.style = `stroke-dashoffset: calc(377 - (377 * ${value}) / 100)`
        }
    }
})
//--------------------