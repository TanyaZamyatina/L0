// галочки (checkboxs) 
let checkbox = document.querySelector("#checkbox");
let checkbox1 = document.querySelector("#checkbox1");
let checkbox2 = document.querySelector("#checkbox2");
let checkbox3 = document.querySelector("#checkbox3");

let checkboxs = [checkbox1, checkbox2, checkbox3]

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        checkboxs.forEach(item => {
        item.checked = true;
    });
    } else {
        checkboxs.forEach(item => {
        item.checked = false;
        });
    }
});

checkboxs.forEach(item => {
    item.addEventListener ('click', () => {
        function check (item) {
            return item.checked
        };
        if (checkboxs.every(check)) {
            checkbox.checked = true
        } else {
            checkbox.checked = false
        }
    });
});

// checkboxs для отображения товаров в способе доставки
const fotoInDelivery = document.querySelectorAll('.fotoInDelivery');
const titlesDel = document.querySelector('.titlesDel');
const titlesDel2 = document.querySelector('.titlesDel2');

checkbox.addEventListener('click', () => {
    if (!checkbox1.checked && !checkbox2.checked && !checkbox3.checked) {
        fotoInDelivery[0].style.display = 'none'
        fotoInDelivery[1].style.display = 'none'
        fotoInDelivery[2].style.display = 'none'
        titlesDel.style.display = 'none'
        titlesDel2.style.display = 'none'
    } else {
        fotoInDelivery[0].style.display = 'inline'
        fotoInDelivery[1].style.display = 'inline'
        fotoInDelivery[2].style.display = 'inline'
        titlesDel.style.display = 'inline'
        titlesDel2.style.display = 'inline'
    }
});

checkbox1.addEventListener('click', () => {
    if (!checkbox1.checked) {
        fotoInDelivery[0].style.display = 'none'
    } else {
        fotoInDelivery[0].style.display = 'inline'
    }
    if (!checkbox1.checked && !checkbox3.checked) {
        titlesDel.style.display = 'none'
    }
});

checkbox2.addEventListener('click', () => {
    if (!checkbox2.checked) {
        fotoInDelivery[2].style.display = 'none'
        titlesDel2.style.display = 'none'
    } else {
        fotoInDelivery[2].style.display = 'inline'
        titlesDel2.style.display = 'inline'
    }
});

checkbox3.addEventListener('click', () => {
    if (!checkbox3.checked) {
        fotoInDelivery[1].style.display = 'none'
    } else {
        fotoInDelivery[1].style.display = 'inline'
    }
    if (!checkbox1.checked && !checkbox3.checked) {
        titlesDel.style.display = 'none'
    }
});

// checkboxs для списания оплаты сразу
let checkbox4 = document.querySelector("#checkbox4");

checkbox4.addEventListener('click', () => {
    const order = document.querySelector('.order');
    let totalPrice = document.querySelector('.totalPrice');
    if (checkbox4.checked) {
        order.innerHTML = 'Оплатить' + ' ' + totalPrice.innerHTML
    } else {
        order.innerHTML = 'Заказать'
    }
})

// checkboxs для количества товаров в корзине 
let shoppingQuantity = document.querySelector(".shoppingQuantity");
let shoppingQuantityMobile = document.querySelector(".shoppingQuantityMobile");

checkbox.addEventListener('click', () => {

    let count = 0;
    if (checkbox1.checked) {
    count++;
    }
    if (checkbox2.checked) {
    count++;
    }
    if (checkbox3.checked) {
    count++;
    }
    shoppingQuantity.innerHTML = count
    shoppingQuantityMobile.innerHTML = count
})

checkbox1.addEventListener('click', () => {
    let count = 0;
    if (checkbox1.checked) {
    count++;
    }
    if (checkbox2.checked) {
    count++;
    }
    if (checkbox3.checked) {
    count++;
    }
    shoppingQuantity.innerHTML = count
    shoppingQuantityMobile.innerHTML = count
})

checkbox2.addEventListener('click', () => {
    let count = 0;
    if (checkbox1.checked) {
    count++;
    }
    if (checkbox2.checked) {
    count++;
    }
    if (checkbox3.checked) {
    count++;
    }
    shoppingQuantity.innerHTML = count
    shoppingQuantityMobile.innerHTML = count
})

checkbox3.addEventListener('click', () => {
    let count = 0;
    if (checkbox1.checked) {
    count++;
    }
    if (checkbox2.checked) {
    count++;
    }
    if (checkbox3.checked) {
    count++;
    }
    shoppingQuantity.innerHTML = count
    shoppingQuantityMobile.innerHTML = count
})

// счетчики
window.onload = function () {
    const inputCounter = document.querySelector('.inputCounter').value;
    const btnLeft = document.querySelector('.btnLeft');
    if (inputCounter == 1) {
        btnLeft.style.color = '#E3E3E7'
    } 
};

const counters = document.querySelectorAll('.counter');

counters.forEach(item => {
    const btnLeft = item.querySelector('.btnLeft');
    const btnRight = item.querySelector('.btnRight');
    const inputCounter = item.querySelector('.inputCounter');
    const remainder = item.querySelector('.remainder');
 
    btnLeft.addEventListener('click', () => {
        let value = parseInt(inputCounter.value);
        if (remainder == null && value > 1) {
            value--;
            inputCounter.value = value;
            if (value == 1) {
                btnLeft.style.color = '#E3E3E7'
            }
        } 
        if (value != 1) {
            let remainderChange = parseInt(remainder.innerHTML);
            remainderChange++;
            value--;
            inputCounter.value = value;
            if (value == 1) {
                btnLeft.style.color = '#E3E3E7';
            }
            if (value != 0) {
                value--;
            }
            remainder.innerHTML = remainderChange;
            if (remainderChange == 0) {
                btnRight.style.color = '#000';
            } else {
                btnRight.style.color = '#000';
            }
        } 
    });

    btnRight.addEventListener('click', () => {
        let value = parseInt(inputCounter.value);
        if (remainder == null) {
            value++;
            inputCounter.value = value;
            if (value > 1) {
                btnLeft.style.color = '#000'
            }
        }
        let remainderChange = parseInt(remainder.innerHTML);
        if (remainderChange != 0) {
            remainderChange--;
            value++;
            inputCounter.value = value;
            if (remainderChange != 0) {
                value++;
            } else {
                btnRight.style.color = '#E3E3E7';
            }
            remainder.innerHTML = remainderChange;
            if (value > 1) {
                btnLeft.style.color = '#000'
            }
        } 
    });
});

// всплывающие подсказки

//подсказка для скидки
const price = document.querySelectorAll('.price');

price.forEach(item => {
    const discount = item.querySelector('.discount');
    const tooltipPrice = item.querySelector('.tooltipPrice');
  
    discount.onmouseover = function () {
        tooltipPrice.animate ([
            {opacity: '1'},
        ], {
            duration: 400,
            fill: 'forwards'
        })
        tooltipPrice.animate ([
            {display: 'inline-block'}
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };
    
    discount.onmouseout = function () {
        tooltipPrice.animate ([
            {opacity: '0'}
        ], {
            duration: 400,
            fill: 'forwards'
        })
        tooltipPrice.animate ([
            {display: 'none'}
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };
});

//подсказка для местоположения
const about = document.querySelectorAll('.about');

about.forEach(item => {
    const clue = item.querySelector('.clue');
    const tooltipAbout = item.querySelector('.tooltipAbout');

    clue.onmouseover = function () {
        tooltipAbout.animate ([
            {opacity: '1'},
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };

    clue.onmouseout = function () {
        tooltipAbout.animate ([
            {opacity: '0'}
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };
});

//подсказка если товар не подойдет
const tooltips = document.querySelectorAll('.tooltips');

tooltips.forEach(item => {
    const blockForTooltip = item.querySelector('.blockForTooltip');
    const tooltip = item.querySelector('.tooltip');

    blockForTooltip.onmouseover = function () {
        tooltip.animate ([
            {opacity: '1'},
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };
    
    blockForTooltip.onmouseout = function () {
        tooltip.animate ([
            {opacity: '0'}
        ], {
            duration: 400,
            fill: 'forwards'
        })
    };
})

// скрытие блоков 
const toggleArrow = document.querySelectorAll('.toggleArrow');
const infoLast = document.querySelector('.infoLast');
const size = document.querySelectorAll('.size');
const size1 = document.querySelector('.size2');
const size2 = document.querySelector('.size2');

toggleArrow.forEach (item => {
    const products = item.parentNode.nextElementSibling;
    item.addEventListener('click', () => {
        products.classList.toggle('hide')
        if (products.classList.contains('hide')) {
            item.style.transform = 'rotate(180deg)'
            infoLast.classList.remove('infoLast')
        } else {
            item.style.transform = 'rotate(0deg)'
        }
        if (toggleArrow[0].style.transform == 'rotate(0deg)') {
            setTimeout (function () {
                infoLast.classList.add('infoLast') 
            },100)
        }
    })
})

// замена при скрытии товаров ('выбрать все' меняется на кол-во товаров и сумму)
const firstToggleArrow = document.querySelector('.toggleArrow');
const products = document.querySelector('.products');

firstToggleArrow.addEventListener('click', () => {
    const inputCounters = document.getElementsByClassName('inputCounter');
    const sumBlock = document.querySelector('.sum');
    const checkboxSelection = document.querySelector('.checkboxSelection');
    let totalPrice = document.querySelector('.totalPrice');

    const priceTextOne = document.querySelectorAll('.priceTextOne'); 
    const priceTextTwo = document.querySelectorAll('.priceTextTwo'); 
    const priceTextThree = document.querySelectorAll('.priceTextThree'); 
    let q = parseInt(priceTextOne[1].innerHTML) + parseInt(priceTextTwo[1].innerHTML) + parseInt(priceTextThree[1].innerHTML);
    totalPrice.innerHTML = q.toLocaleString()
    
    let sum = 0;
    
    for (let i = 0; i < inputCounters.length; i++) {
        if (inputCounters[i].offsetParent !== null) {
            sum += Number(inputCounters[i].value);
        }
    }

    if (products.classList.contains('hide')) {
        checkboxSelection.style.display = 'none';
        sumBlock.style.display = 'block';
        sumBlock.innerHTML = sum + ' ' + 'товаров' + ' ' + '·' + ' ' + totalPrice.innerHTML;
    } else {
        checkboxSelection.style.display = 'block';
        sumBlock.style.display = 'none';
    }
})

// итоговое количество товаров
const quantity = document.querySelector('.quantity');


counters.forEach(item => {
    const btnLeft = item.querySelector('.btnLeft');
    const btnRight = item.querySelector('.btnRight');

    item.addEventListener('click', () => {
        const inputCounters = document.getElementsByClassName('inputCounter');
        let sum = 0;
    
        for (let i = 0; i < inputCounters.length; i++) {
            if (inputCounters[i].offsetParent !== null) {
                sum += Number(inputCounters[i].value);
            }
        }
        quantity.innerHTML = sum + ' ' + 'товара';
    })

})


// форма получателя
const errorText = document.querySelectorAll('.error');

// поле для ввода имени
const userNameInput = document.querySelector('#userName');
const userNameParagraph = document.querySelector('.userName');
const errorText0 = document.querySelector('.error0');

userNameInput.addEventListener('blur', () => {
    const userName = userNameInput.value;
    
    if (userName === '') {
        userNameParagraph.style.opacity = '0';
        return;
    } 
});

userNameInput.addEventListener('focus', () => {
    userNameParagraph.style.opacity = '1';
    errorText0.style.opacity = '0';
    userNameInput.style.borderBottom = '1px solid #9797AF';
});

// поле для ввода фамилии
const userSurnameInput = document.querySelector('#userSurname');
const userSurnameParagraph = document.querySelector('.userSurname');
const errorText1 = document.querySelector('.error1');

userSurnameInput.addEventListener('blur', () => {
    const userSurname = userSurnameInput.value;
    
    if (userSurname === '') {
        userSurnameParagraph.style.opacity = '0';
        return;
    } 
});

userSurnameInput.addEventListener('focus', () => {
    userSurnameParagraph.style.opacity = '1';
    errorText1.style.opacity = '0';
    userSurnameInput.style.borderBottom = '1px solid #9797AF';
});

// поле для ввода email
const emailInput = document.querySelector('#email');
const errorText2 = document.querySelector('.error2');
const emailParagraph = document.querySelector('.email');
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // Выражение для проверки правильности формата адреса электронной почты

emailInput.addEventListener('blur', () => { 
    const email = emailInput.value;
    const isValidEmail = emailRegex.test(email);

    if (email === '') {
        errorText2.style.opacity = '0';
        emailParagraph.style.opacity = '0';
        return;
    }
    if (isValidEmail) {
        errorText[0].style.opacity = '0';
        emailInput.style.color = '#000';
    } else {
        errorText[0].style.opacity = '1';
        emailInput.style.color = '#F55123';
    }
});

emailInput.addEventListener('focus', () => {
    emailParagraph.style.opacity = '1';
    errorText2.style.opacity = '0';
    errorText[0].style.opacity = '0';
    emailInput.style.borderBottom = '1px solid #9797AF';
    emailInput.style.color = '#000';
});

// поле для ввода телефона
const telInput = document.querySelector('#tel');
const errorText3 = document.querySelector('.error3');
const telParagraph = document.querySelector('.tel');
const phoneRegex = /^[+]?(\d{1,3}\s?)?(\d{1,3}\s?){2}\d{2}\s?\d{2}$/; // Выражение для проверки правильности формата номера телефона

telInput.addEventListener('input', () => {
    const value = telInput.value;
    const forTel = 30;
    if (value.length > forTel) {
        telInput.value = value.slice(0, forTel);
    }
});

telInput.addEventListener('blur', () => {
    const tel = telInput.value;
    const isValidTel = phoneRegex.test(tel);

    if (tel === '') {
        errorText3.style.opacity = '0';
        telParagraph.style.opacity = '0';
        return;
    }
    if (isValidTel) {
        errorText[1].style.opacity = '0';
        telInput.style.color = '#000';
    } else {
        errorText[1].style.opacity = '1';
        telInput.style.color = '#F55123';
    }
});

telInput.addEventListener('focus', () => {
    telParagraph.style.opacity = '1';
    errorText3.style.opacity = '0';
    errorText[1].style.opacity = '0';
    telInput.style.borderBottom = '1px solid #9797AF';
    telInput.style.color = '#000';
});

// поле для ввода ИНН
const numberInput = document.querySelector('#number');
const errorText4 = document.querySelector('.error4');
const numberParagraph = document.querySelector('.number');
const forNumber = 14;

numberInput.addEventListener('input', () => {
    let value = numberInput.value;
    value = value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
    numberInput.value = value;
    if (value.length > forNumber) {
        numberInput.value = value.slice(0, forNumber);
    }
});

numberInput.addEventListener('blur', () => {
    const number = numberInput.value;
    
    if (number === '') {
        errorText4.style.opacity = '0';
        numberParagraph.style.opacity = '0';
        return;
    } 
    if (number.length < forNumber) {
        errorText[2].style.opacity = '1';
        numberInput.style.color = '#F55123';
    }
});

numberInput.addEventListener('focus', () => {
    numberParagraph.style.opacity = '1';
    errorText4.style.opacity = '0';
    errorText[2].style.opacity = '0';
    numberInput.style.borderBottom = '1px solid #9797AF';
    numberInput.style.color = '#000';
});

// кнопка заказать
const order = document.querySelector('.order');
const recipient = document.querySelector('.recipient');

order.addEventListener('click', () => {
    const userName = userNameInput.value;
    const userSurname = userSurnameInput.value;
    const email = emailInput.value;
    const tel = telInput.value;
    const number = numberInput.value;

    if (userName === '') {
        errorText0.style.opacity = '1';
        userNameInput.style.borderBottom = '1px solid #F55123';
        recipient.scrollIntoView({ behavior: 'smooth' });
    } else {
        errorText0.style.opacity = '0';
        userNameInput.style.borderBottom = '1px solid #9797AF';
    }
    if (userSurname === '') {   
        errorText1.style.opacity = '1';
        userSurnameInput.style.borderBottom = '1px solid #F55123';
        recipient.scrollIntoView({ behavior: 'smooth' });
    } else {
        errorText1.style.opacity = '0';
        userSurnameInput.style.borderBottom = '1px solid #9797AF';
    }
    if (email === '') {
        errorText2.style.opacity = '1';
        emailInput.style.borderBottom = '1px solid #F55123';
        recipient.scrollIntoView({ behavior: 'smooth' });
    } 
    if (tel === '') {
        errorText3.style.opacity = '1';
        telInput.style.borderBottom = '1px solid #F55123';
        recipient.scrollIntoView({ behavior: 'smooth' });
    }
    if (number === '') {
        errorText4.style.opacity = '1';
        numberInput.style.borderBottom = '1px solid #F55123';
        recipient.scrollIntoView({ behavior: 'smooth' });
    }
    errorText.forEach(item => {
        if (item.style.opacity == '1') {
            recipient.scrollIntoView({ behavior: 'smooth' });
        } 
    })
});

// окно способа оплаты
const paymentMethodWindow = document.querySelector('.paymentMethodWindow');
const btnSelect = document.querySelector('.btnSelect');
const btnClose = document.querySelector('.close');
const bthChangeCard = document.querySelectorAll('.bthChangeCard');
let inputCard = document.querySelectorAll('.inputCard');
let changeNomberCard = document.querySelectorAll('.changeNomberCard');
const checkCard = document.querySelectorAll('.checkCard');
const addStyle = document.querySelector('.addStyle');

btnSelect.addEventListener('click', () => {
    if (inputCard[0].checked) {
        changeNomberCard.forEach(item => {
            item.innerHTML = checkCard[0].innerHTML
            addStyle.style.fontSize = '13px'
            addStyle.style.lineHeight = '24px'
            addStyle.style.gap = '8px'
        })
        paymentMethodWindow.style.display = 'none'
    } else if (inputCard[1].checked) {
        changeNomberCard.forEach(item => {
        item.innerHTML = checkCard[1].innerHTML
        addStyle.style.fontSize = '13px'
        addStyle.style.lineHeight = '24px'
        addStyle.style.gap = '8px'
        })
        paymentMethodWindow.style.display = 'none'
    } else if (inputCard[2].checked) {
        changeNomberCard.forEach(item => {
        item.innerHTML = checkCard[2].innerHTML
        addStyle.style.fontSize = '13px'
        addStyle.style.lineHeight = '24px'
        addStyle.style.gap = '8px'
        })
        paymentMethodWindow.style.display = 'none'
    } else if (inputCard[3].checked) {
        changeNomberCard.forEach(item => {
        item.innerHTML = checkCard[3].innerHTML
        addStyle.style.fontSize = '13px'
        addStyle.style.lineHeight = '24px'
        addStyle.style.gap = '8px'
        })
        paymentMethodWindow.style.display = 'none'
    }
});

bthChangeCard.forEach(item => {
    item.addEventListener('click', () => {
        paymentMethodWindow.style.display = 'flex'
    })
});

btnClose.addEventListener('click', () => {
    paymentMethodWindow.style.display = 'none'
});

//кнопки выбора доставки (в пункт выдачи или курьером)
const btnDeliveryMethod = document.querySelectorAll('.btnDeliveryMethod');

btnDeliveryMethod.forEach(item => {
    item.addEventListener('click', () => {
        btnDeliveryMethod.forEach(otherItem => {
            if (otherItem !== item) {
            otherItem.style.border = '2px solid #F7DBF2'
            }
        })
        if (item.style.border == '2px solid rgb(203, 17, 171)') {
            item.style.border = '2px solid #F7DBF2'
        } else {
            item.style.border = '2px solid #CB11AB'
        }
    })
});

// окно способа доставки
const deliveryWindow = document.querySelector('.deliveryWindow');
const btnSelect2 = document.querySelector('.btnSelect2');
const btnClose2 = document.querySelector('.close2');
const bthChangeDelivery = document.querySelectorAll('.bthChangeDelivery');
let inputAddress = document.querySelectorAll('.inputAddress');
let changeAddress = document.querySelectorAll('.changeAddress');
const checkAddress = document.querySelectorAll('.checkAddress');

btnSelect2.addEventListener('click', () => {
    if (inputAddress[0].checked) {
        changeAddress.forEach(item => {
            item.innerHTML = checkAddress[0].innerHTML
        })
        deliveryWindow.style.display = 'none'
    } else if (inputAddress[1].checked) {
        changeAddress.forEach(item => {
        item.innerHTML = checkAddress[1].innerHTML
        })
        deliveryWindow.style.display = 'none'
    } else if (inputAddress[2].checked) {
        changeAddress.forEach(item => {
        item.innerHTML = checkAddress[2].innerHTML
        })
        deliveryWindow.style.display = 'none'
    } else if (inputAddress[3].checked) {
        changeAddress.forEach(item => {
        item.innerHTML = checkAddress[3].innerHTML
        })
        deliveryWindow.style.display = 'none'
    }
});

bthChangeDelivery.forEach(item => {
    item.addEventListener('click', () => {
        deliveryWindow.style.display = 'flex'
    })
});

btnClose2.addEventListener('click', () => {
    deliveryWindow.style.display = 'none'
});

// счетчики/сумма
const btnRight = document.querySelectorAll('.btnRight'); 
const btnLeft = document.querySelectorAll('.btnLeft'); 
const priceTextOne = document.querySelectorAll('.priceTextOne'); 
const priceTextTwo = document.querySelectorAll('.priceTextTwo'); 
const priceTextThree = document.querySelectorAll('.priceTextThree'); 
const remainder1 = document.querySelector('.remainder1'); 

btnRight[0].addEventListener('click', () => {
    let q = parseInt(priceTextOne[1].innerHTML)
    q += 522
    priceTextOne[1].innerHTML = q + ' ' + 'сом'

    const inputCounter = document.querySelector('.inputCounter');
    let value = parseInt(inputCounter.value);
    if (value == 3) {
        priceTextOne[1].innerHTML = 1566 + ' ' + 'сом'
    }
});

btnLeft[0].addEventListener('click', () => {
    let q = parseInt(priceTextOne[1].innerHTML)
    q -= 522
    priceTextOne[1].innerHTML = q + ' ' + 'сом'

    const inputCounter = document.querySelector('.inputCounter');
    let value = parseInt(inputCounter.value);
    if (value == 1) {
        priceTextOne[1].innerHTML = 522 + ' ' + 'сом'
    }
});

btnRight[2].addEventListener('click', () => {
    let q = parseInt(priceTextTwo[1].innerHTML)
    q += 10500
    priceTextTwo[1].innerHTML = q + ' ' + 'сом'
});

btnLeft[2].addEventListener('click', () => {
    let q = parseInt(priceTextTwo[1].innerHTML)
    q -= 10500
    priceTextTwo[1].innerHTML = q + ' ' + 'сом'

    if (q == 10500) {
        priceTextTwo[1].innerHTML = 10500 + ' ' + 'сом'
    }
});

btnRight[4].addEventListener('click', () => {
    let q = parseInt(priceTextThree[1].innerHTML)
    q += 247
    priceTextThree[1].innerHTML = q + ' ' + 'сом'

    if (remainder1.innerHTML == 0) {
        priceTextThree[1].innerHTML = 988 + ' ' + 'сом'
    }
});

btnLeft[4].addEventListener('click', () => {
    let q = parseInt(priceTextThree[1].innerHTML)
    q -= 247
    priceTextThree[1].innerHTML = q + ' ' + 'сом'

    if (parseInt(priceTextThree[1].innerHTML) == 0) {
        priceTextThree[1].innerHTML = 247 + ' ' + 'сом'
    }
});

btnRight.forEach(item  => {
    item.addEventListener('click', () => {
        let totalPrice = document.querySelector('.totalPrice');
        let q = parseInt(priceTextOne[1].innerHTML) + parseInt(priceTextTwo[1].innerHTML) + parseInt(priceTextThree[1].innerHTML);
        totalPrice.innerHTML = q.toLocaleString()
    })
})

btnLeft.forEach(item  => {
    item.addEventListener('click', () => {
        let totalPrice = document.querySelector('.totalPrice');
        let q = parseInt(priceTextOne[1].innerHTML) + parseInt(priceTextTwo[1].innerHTML) + parseInt(priceTextThree[1].innerHTML);
        totalPrice.innerHTML = q.toLocaleString()
    })
})

