// NOTE: define element globally
const squreEl = document.querySelector('.square')
const triangleEl = document.querySelector('.triangle')
const circleEl = document.querySelector('.circle')


const showMsg = function (e) {
    const target = e.target
    // console.dir(target);
    const shape = target.dataset.shape
    // console.log(shape);
    document.querySelector('.js-show').style.fontSize = '22px';
    document.querySelector('.js-show').innerHTML = `You're hovering over the ${shape}`
}

const clearMsg = function () {
    document.querySelector('.js-show').innerHTML = ''
}

squreEl.addEventListener('mouseover', showMsg)
triangleEl.addEventListener('mouseover', showMsg)
circleEl.addEventListener('mouseover', showMsg)


squreEl.addEventListener('mouseout',clearMsg)
triangleEl.addEventListener('mouseout', clearMsg)
circleEl.addEventListener('mouseout', clearMsg)