(function(){
    const spanEl = document.querySelector('main h2 span')
    const txtArr = ['PUBLISHER','DESIGNER']
    let index = 0;
    let currentTxt = txtArr[index].split('')
    // console.log(currentTxt)

    function writeTxt(){
        spanEl.textContent += currentTxt.shift()
        if(currentTxt.length !== 0){
            // 덜썼음
            setTimeout(writeTxt,Math.floor(Math.random() * 100))
        }else{
            // 다썼음
            currentTxt = spanEl.textContent.split('')
            setTimeout(deleteTxt, 3000)
        }
    }

    function deleteTxt(){
        currentTxt.pop()
        spanEl.textContent = currentTxt.join('')
        if(currentTxt.length !== 0){
            // 덜지워짐
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }else{
            // 다지워짐
            index = (index + 1) % txtArr.length
            currentTxt = txtArr[index].split('')
            writeTxt()
        }
    }
    writeTxt()
})()


const headerEl = document.querySelector('header')

window.addEventListener('scroll', function(){
    if(window.scrollY > 0) {
        headerEl.classList.add('on')
    }else{
        headerEl.classList.remove('on')
    }
})

const animationMove = function(selector){
    const targetEl = document.querySelector(selector)
    const bsy = window.scrollY
    const tsy = targetEl.getBoundingClientRect().top + bsy
    window.scrollTo({
        top : tsy,
        behavior : 'smooth'
    })
}

const scrollMove = document.querySelectorAll('[data-animation-scroll="true"]')
for(let i = 0; i < scrollMove.length; i++){
    scrollMove[i].addEventListener('click', function(){
        const target = this.dataset.target
        animationMove(target)
    })
}