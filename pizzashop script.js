// Меню

const menuIsActive = document.querySelector('.menu-is-active')

document.addEventListener('click', (event) => {
    if (event.target.closest('.burger-button')) {
        menuIsActive.classList.add('menu-activ')
    } else {
        menuIsActive.classList.remove('menu-activ')
    }
})

// Смена оражевого фона

const swithElementFirst = document.querySelector('.content-first__column-first__switch--element-first')
const swithElementSecond = document.querySelector('.content-first__column-first__switch--element-second')

swithElementFirst.addEventListener('click', () => {
    swithElementFirst.classList.add('content-first__column-first__switch-element-is-aktive')
    swithElementSecond.classList.remove('content-first__column-first__switch-element-is-aktive')
})

swithElementSecond.addEventListener('click', () => {
    swithElementSecond.classList.add('content-first__column-first__switch-element-is-aktive')
    swithElementFirst.classList.remove('content-first__column-first__switch-element-is-aktive')
})

















const sizeMenuFirst22 = document.querySelector('.content-second__menu__first__numbers-first')
const sizeMenuFirst28 = document.querySelector('.content-second__menu__first__numbers-second')
const sizeMenuFirst33 = document.querySelector('.content-second__menu__first__numbers-third')

const sizeMenuSecond22 = document.querySelector('.content-second__menu__second__numbers-first')
const sizeMenuSecond28 = document.querySelector('.content-second__menu__second__numbers-second')
const sizeMenuSecond33 = document.querySelector('.content-second__menu__second__numbers-third')

const sizeMenuThird22 = document.querySelector('.content-second__menu__third__numbers-first')
const sizeMenuThird28 = document.querySelector('.content-second__menu__third__numbers-second')
const sizeMenuThird33 = document.querySelector('.content-second__menu__third__numbers-third')

const sizeMenuFourth22 = document.querySelector('.content-second__menu__fourth__numbers-first')
const sizeMenuFourth28 = document.querySelector('.content-second__menu__fourth__numbers-second')
const sizeMenuFourth33 = document.querySelector('.content-second__menu__fourth__numbers-third')

const sizeMenuFifth22 = document.querySelector('.content-third__otcek-second__menu__first__numbers-first')
const sizeMenuFifth28 = document.querySelector('.content-third__otcek-second__menu__first__numbers-second')
const sizeMenuFifth33 = document.querySelector('.content-third__otcek-second__menu__first__numbers-third')

const sizeMenuSixth22 = document.querySelector('.content-third__otcek-second__menu__second__numbers-first')
const sizeMenuSixth28 = document.querySelector('.content-third__otcek-second__menu__second__numbers-second')
const sizeMenuSixth33 = document.querySelector('.content-third__otcek-second__menu__second__numbers-third')

const sizeMenuSeventh22 = document.querySelector('.content-third__otcek-second__menu__third__numbers-first')
const sizeMenuSeventh28 = document.querySelector('.content-third__otcek-second__menu__third__numbers-second')
const sizeMenuSeventh33 = document.querySelector('.content-third__otcek-second__menu__third__numbers-third')

const sizeMenuEighth22 = document.querySelector('.content-third__otcek-second__menu__fourth__numbers-first')
const sizeMenuEighth28 = document.querySelector('.content-third__otcek-second__menu__fourth__numbers-second')
const sizeMenuEighth33 = document.querySelector('.content-third__otcek-second__menu__fourth__numbers-third')

const minusFirst = document.querySelector('.content-second__menu__first__price__calculator--minus')
const plusFirst = document.querySelector('.content-second__menu__first__price__calculator--plus')
const summaFirst = document.querySelector('.content-second__menu__first__price--summa')
const collvoFirst = document.querySelector('.content-second__menu__first__price__calculator--number')
const priceFirstLittle = 6.35
const priceFirstAverage = 8.35
const priceFirstBig = 10.35

const minusSecond = document.querySelector('.content-second__menu__second__price__calculator--minus')
const plusSecond = document.querySelector('.content-second__menu__second__price__calculator--plus')
const summaSecond = document.querySelector('.content-second__menu__second__price--summa')
const collvoSecond = document.querySelector('.content-second__menu__second__price__calculator--number')
const priceSecondLittle = 5.35
const priceSecondAverage = 7.35
const priceSecondBig = 9.35

const minusThird = document.querySelector('.content-second__menu__third__price__calculator--minus')
const plusThird = document.querySelector('.content-second__menu__third__price__calculator--plus')
const summaThird = document.querySelector('.content-second__menu__third__price--summa')
const collvoThird = document.querySelector('.content-second__menu__third__price__calculator--number')
const priceThirdLittle = 7.35
const priceThirdAverage = 9.35
const priceThirdBig = 11.35

const minusFourth = document.querySelector('.content-second__menu__fourth__price__calculator--minus')
const plusFourth = document.querySelector('.content-second__menu__fourth__price__calculator--plus')
const summaFourth = document.querySelector('.content-second__menu__fourth__price--summa')
const collvoFourth = document.querySelector('.content-second__menu__fourth__price__calculator--number')
const priceFourthLittle = 6.35
const priceFourthAverage = 8.35
const priceFourthBig = 10.35

const minusFifth = document.querySelector('.content-third__otcek-second__menu__first__price__calculator--minus')
const plusFifth = document.querySelector('.content-third__otcek-second__menu__first__price__calculator--plus')
const summaFifth = document.querySelector('.content-third__otcek-second__menu__first__price--summa')
const collvoFifth = document.querySelector('.content-third__otcek-second__menu__first__price__calculator--number')
const priceFifthLittle = 5.35
const priceFifthAverage = 7.35
const priceFifthBig = 9.35

const minusSixth = document.querySelector('.content-third__otcek-second__menu__second__price__calculator--minus')
const plusSixth = document.querySelector('.content-third__otcek-second__menu__second__price__calculator--plus')
const summaSixth = document.querySelector('.content-third__otcek-second__menu__second__price--summa')
const collvoSixth = document.querySelector('.content-third__otcek-second__menu__second__price__calculator--number')
const priceSixthLittle = 4.35
const priceSixthAverage = 6.35
const priceSixthBig = 8.35

const minusSeventh = document.querySelector('.content-third__otcek-second__menu__third__price__calculator--minus')
const plusSeventh = document.querySelector('.content-third__otcek-second__menu__third__price__calculator--plus')
const summaSeventh = document.querySelector('.content-third__otcek-second__menu__third__price--summa')
const collvoSeventh = document.querySelector('.content-third__otcek-second__menu__third__price__calculator--number')
const priceSeventhLittle = 5.35
const priceSeventhAverage = 7.35
const priceSeventhBig = 9.35

const minusEighth = document.querySelector('.content-third__otcek-second__menu__fourth__price__calculator--minus')
const plusEighth = document.querySelector('.content-third__otcek-second__menu__fourth__price__calculator--plus')
const summaEighth = document.querySelector('.content-third__otcek-second__menu__fourth__price--summa')
const collvoEighth = document.querySelector('.content-third__otcek-second__menu__fourth__price__calculator--number')
const priceEighthLittle = 6.35
const priceEighthAverage = 8.35
const priceEighthBig = 10.35

// Размер и цена пицц

function sizePizza(size1, size2, size3, collvo, summa, price) {
    size1.addEventListener('click', () => {
        size1.classList.add('pizza--size--is-active')
        size2.classList.remove('pizza--size--is-active')
        size3.classList.remove('pizza--size--is-active')

        summa.textContent = price * Number(collvo.textContent)

        const rounding = Number(summa.textContent)
        summa.textContent = rounding.toFixed(2)
    })
}

sizePizza(sizeMenuFirst22, sizeMenuFirst28, sizeMenuFirst33, collvoFirst, summaFirst, priceFirstLittle)
sizePizza(sizeMenuFirst28, sizeMenuFirst22, sizeMenuFirst33, collvoFirst, summaFirst, priceFirstAverage)
sizePizza(sizeMenuFirst33, sizeMenuFirst22, sizeMenuFirst28, collvoFirst, summaFirst, priceFirstBig)

sizePizza(sizeMenuSecond22, sizeMenuSecond28, sizeMenuSecond33, collvoSecond, summaSecond, priceSecondLittle)
sizePizza(sizeMenuSecond28, sizeMenuSecond22, sizeMenuSecond33, collvoSecond, summaSecond, priceSecondAverage)
sizePizza(sizeMenuSecond33, sizeMenuSecond22, sizeMenuSecond28, collvoSecond, summaSecond, priceSecondBig)

sizePizza(sizeMenuThird22, sizeMenuThird28, sizeMenuThird33, collvoThird, summaThird, priceThirdLittle)
sizePizza(sizeMenuThird28, sizeMenuThird22, sizeMenuThird33, collvoThird, summaThird, priceThirdAverage)
sizePizza(sizeMenuThird33, sizeMenuThird22, sizeMenuThird28, collvoThird, summaThird, priceThirdBig)

sizePizza(sizeMenuFourth22, sizeMenuFourth28, sizeMenuFourth33, collvoFourth, summaFourth, priceFourthLittle)
sizePizza(sizeMenuFourth28, sizeMenuFourth22, sizeMenuFourth33, collvoFourth, summaFourth, priceFourthAverage)
sizePizza(sizeMenuFourth33, sizeMenuFourth22, sizeMenuFourth28, collvoFourth, summaFourth, priceFourthBig)

sizePizza(sizeMenuFifth22, sizeMenuFifth28, sizeMenuFifth33, collvoFifth, summaFifth, priceFifthLittle)
sizePizza(sizeMenuFifth28, sizeMenuFifth22, sizeMenuFifth33, collvoFifth, summaFifth, priceFifthAverage)
sizePizza(sizeMenuFifth33, sizeMenuFifth22, sizeMenuFifth28, collvoFifth, summaFifth, priceFifthBig)

sizePizza(sizeMenuSixth22, sizeMenuSixth28, sizeMenuSixth33, collvoSixth, summaSixth, priceSixthLittle)
sizePizza(sizeMenuSixth28, sizeMenuSixth22, sizeMenuSixth33, collvoSixth, summaSixth, priceSixthAverage)
sizePizza(sizeMenuSixth33, sizeMenuSixth22, sizeMenuSixth28, collvoSixth, summaSixth, priceSixthBig)

sizePizza(sizeMenuSeventh22, sizeMenuSeventh28, sizeMenuSeventh33, collvoSeventh, summaSeventh, priceSeventhLittle)
sizePizza(sizeMenuSeventh28, sizeMenuSeventh22, sizeMenuSeventh33, collvoSeventh, summaSeventh, priceSeventhAverage)
sizePizza(sizeMenuSeventh33, sizeMenuSeventh22, sizeMenuSeventh28, collvoSeventh, summaSeventh, priceSeventhBig)

sizePizza(sizeMenuEighth22, sizeMenuEighth28, sizeMenuEighth33, collvoEighth, summaEighth, priceEighthLittle)
sizePizza(sizeMenuEighth28, sizeMenuEighth22, sizeMenuEighth33, collvoEighth, summaEighth, priceEighthAverage)
sizePizza(sizeMenuEighth33, sizeMenuEighth22, sizeMenuEighth28, collvoEighth, summaEighth, priceEighthBig)


// Счетчик пицц

function result(collvo, summa, price, plus, minus, size) {
    plus.addEventListener('click', () => {
        if (collvo.textContent < 10) {
            if (size.classList.contains("pizza--size--is-active")) {
                collvo.textContent = Number(collvo.textContent) + 1
                summa.textContent = parseFloat(summa.textContent) + parseFloat(price)
                const rounding = Number(summa.textContent)
                summa.textContent = rounding.toFixed(2)
            }
        }
    })

    minus.addEventListener('click', () => {
        if (collvo.textContent > 0) {
            if (size.classList.contains("pizza--size--is-active")) {
              collvo.textContent = Number(collvo.textContent) - 1;
            summa.textContent = parseFloat(summa.textContent) - parseFloat(price);
            const rounding = Number(summa.textContent)
            summa.textContent = rounding.toFixed(2)  
            }          
        }
    })
}

result(collvoFirst, summaFirst, priceFirstLittle, plusFirst, minusFirst, sizeMenuFirst22)
result(collvoFirst, summaFirst, priceFirstAverage, plusFirst, minusFirst, sizeMenuFirst28)
result(collvoFirst, summaFirst, priceFirstBig, plusFirst, minusFirst, sizeMenuFirst33)

result(collvoSecond, summaSecond, priceSecondLittle, plusSecond, minusSecond, sizeMenuSecond22)
result(collvoSecond, summaSecond, priceSecondAverage, plusSecond, minusSecond, sizeMenuSecond28)
result(collvoSecond, summaSecond, priceSecondBig, plusSecond, minusSecond, sizeMenuSecond33)

result(collvoThird, summaThird, priceThirdLittle, plusThird, minusThird, sizeMenuThird22)
result(collvoThird, summaThird, priceThirdAverage, plusThird, minusThird, sizeMenuThird28)
result(collvoThird, summaThird, priceThirdBig, plusThird, minusThird, sizeMenuThird33)

result(collvoFourth, summaFourth, priceFourthLittle, plusFourth, minusFourth, sizeMenuFourth22)
result(collvoFourth, summaFourth, priceFourthAverage, plusFourth, minusFourth, sizeMenuFourth28)
result(collvoFourth, summaFourth, priceFourthBig, plusFourth, minusFourth, sizeMenuFourth33)

result(collvoFifth, summaFifth, priceFifthLittle, plusFifth, minusFifth, sizeMenuFifth22)
result(collvoFifth, summaFifth, priceFifthAverage, plusFifth, minusFifth, sizeMenuFifth28)
result(collvoFifth, summaFifth, priceFifthBig, plusFifth, minusFifth, sizeMenuFifth33)

result(collvoSixth, summaSixth, priceSixthLittle, plusSixth, minusSixth, sizeMenuSixth22)
result(collvoSixth, summaSixth, priceSixthAverage, plusSixth, minusSixth, sizeMenuSixth28)
result(collvoSixth, summaSixth, priceSixthBig, plusSixth, minusSixth, sizeMenuSixth33)

result(collvoSeventh, summaSeventh, priceSeventhLittle, plusSeventh, minusSeventh, sizeMenuSeventh22)
result(collvoSeventh, summaSeventh, priceSeventhAverage, plusSeventh, minusSeventh, sizeMenuSeventh28)
result(collvoSeventh, summaSeventh, priceSeventhBig, plusSeventh, minusSeventh, sizeMenuSeventh33)

result(collvoEighth, summaEighth, priceEighthLittle, plusEighth, minusEighth, sizeMenuEighth22)
result(collvoEighth, summaEighth, priceEighthAverage, plusEighth, minusEighth, sizeMenuEighth28)
result(collvoEighth, summaEighth, priceEighthBig, plusEighth, minusEighth, sizeMenuEighth33)











