let burgerModal = document.querySelector('.burger-menu__lists');
let people = document.querySelector('.people'),
    dayTime = document.querySelector('.time'),
    hotel = document.querySelector('.select-hotel'),
    price = document.querySelector('.price__value')
    personPrice = 10000,
    dayPrice = 5000;

let nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    slideContent = document.querySelectorAll('.slider__img'),
    dot = document.querySelectorAll('.dot');
let info = document.querySelectorAll('.intelligence__tab');

let images = document.querySelectorAll('.intelligence__tabcontent-sh');

var slideNum = 0

let input = document.querySelectorAll('.input'),
    btn = document.querySelector('.btn');

let h = document.getElementById('hours');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');

let link = document.querySelectorAll('.social-network > a');

function hideShow() {
    document.querySelector('.burger-overflow').classList.toggle('hide');
    if(document.querySelector('.burger-overflow').classList.contains('hide')) {
        document.body.style.overflow = ''
    } else {
        document.body.style.overflow = 'hidden'
    }
}

document.querySelector('.burger-menu').addEventListener('click', (e) => {
    hideShow()
})

burgerModal.addEventListener('click', (e) => {
    if(e.target === burgerModal) {
        hideShow()
    }
})


function hideSlides() {
    slideContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
        item.classList.remove('fade');
    });
}

function showSlides(slideNum) {
    slideContent[slideNum].classList.add('show');
    slideContent[slideNum].classList.add('fade');
    slideContent[slideNum].classList.remove('hide');
}

nextBtn.addEventListener('click', () => {
    if(prevBtn.classList.contains('arrowHide')) {
        prevBtn.classList.remove('arrowHide')
    }
    slideNum = slideNum + 1;
    hideSlides();
    showSlides(slideNum);
    let c = slideNum + 1;
    if(c == slideContent.length) {
        nextBtn.classList.add('arrowHide')
    }

    dot.forEach(item => {
        let dotData = +item.dataset.dot

        if(c === +item.dataset.dot) {
            dot[dotData - 2].classList.remove('dot-active')
            dot[dotData - 1].classList.add('dot-active')
        }
    })

});

prevBtn.addEventListener('click', () => {
    if(nextBtn.classList.contains('arrowHide')) {
        nextBtn.classList.remove('arrowHide')
    }
    slideNum = slideNum - 1;
    hideSlides();
    showSlides(slideNum);
    let c = slideNum + 1;
    if(slideNum == 0) {
        prevBtn.classList.add('arrowHide')
    }

    dot.forEach(item => {
        let dotData = +item.dataset.dot

        if(c === +item.dataset.dot) {
            dot[dotData].classList.remove('dot-active')
            dot[dotData - 1].classList.add('dot-active')
        }
    })
})

dot.forEach(item => {
    item.addEventListener('click', (e) => {
        slideNum = 0
        let hbb = +e.target.dataset.dot;
        
        if(hbb == slideContent.length) {
            nextBtn.classList.add('arrowHide')
        } else {
            nextBtn.classList.remove('arrowHide')
        }

        if(hbb == 1) {
            prevBtn.classList.add('arrowHide')
        } else {
            prevBtn.classList.remove('arrowHide')
        }

        document.querySelectorAll('.slider__img').forEach(items => {
            items.classList.add('hide')
            items.classList.remove('show')
            items.classList.remove('fade')
        })

        let dotData = +item.dataset.dot

        if(hbb === +item.dataset.dot) {
            dot.forEach(dots => {
                dots.classList.remove('dot-active')
            })
            dot[dotData - 1].classList.add('dot-active')
        }
        
        slideContent[hbb - 1].classList.remove('hide')
        slideContent[hbb - 1].classList.add('fade')
        slideNum = slideNum + (hbb - 1);
    })
    
})

info.forEach(item => {
    item.addEventListener('click', () => {
        info.forEach(items => {
            items.classList.remove('intelligence__tab-active')
        })
        item.classList.add('intelligence__tab-active')

        images.forEach(imgs => {
            imgs.classList.add('hide')
            if(+item.dataset.tabnumber == +imgs.dataset.tabcontent) {
                imgs.classList.remove('hide')
            }
            
            if(+item.dataset.tabnumber > imgs.childNodes.length + 1) {
                imgs.classList.remove('hide')
            }
        })
        
    })
}) 

people.addEventListener('change', () => {
    price.innerHTML = personPrice * people.value + dayPrice * dayTime.value * hotel.value
    console.log();
})
people.addEventListener('focus', inputSelect)

dayTime.addEventListener('change', () => {
    price.innerHTML = ((personPrice * people.value) + (dayPrice * dayTime.value * hotel.value)) 
})
dayTime.addEventListener('focus', inputSelect)

hotel.addEventListener('change', () => {
    price.innerHTML = ((personPrice * people.value) + (dayPrice * dayTime.value * hotel.value)) 
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    input.forEach(ipt => {
        ipt.value = '';
        ipt.parentElement.querySelector('label').classList.remove('active');
    })
})

function inputSelect() {
	if(this.value != '') {
		this.select();
	}
}


function labelCheckFocus() {

	if(this.value != '') {
		this.select();
	}

	setMiniLabel.call(this)
}

function setMiniLabel() {

	this.parentElement.querySelector('label').classList.add('active')

}

function labelCheckBlur() {

	if (this.value === '' || this.value.trim() === '') {
		this.parentElement.querySelector('label').classList.remove('active')

		return;
	}
}

input.forEach(item => {
    item.addEventListener('focus', labelCheckFocus)
})
input.forEach(item => {
    item.addEventListener('blur', labelCheckBlur)
})

function getTimes() {

    let discountEnd = new Date('May 2 2022, 00:00:00')
    let dataNow = new Date();
    let dif = discountEnd - dataNow;

    let hours = Math.floor(dif/(1000*60*60));
    let mins = Math.floor(dif%(1000*60*60)/(1000*60));
    let secs = Math.floor(dif%(1000*60)/(1000));

    var sum = hours + mins + secs;
    

    h.innerHTML = getNumber(hours);
    m.innerHTML = getNumber(mins);
    s.innerHTML = getNumber(secs);
}
getTimes()
let x = setInterval(getTimes, 1000)

function getNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}

link.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
    })
})