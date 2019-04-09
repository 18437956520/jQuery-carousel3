let n
start()
let timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => { makeEnter($(e.currentTarget)) })
    makeCurrent(getImage(n+1))
    n += 1
}, 2000)

document.addEventListener('visibilitychange', function(x){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend', (e) => { makeEnter($(e.currentTarget)) })
            makeCurrent(getImage(n+1))
            n += 1
        }, 2000)
    }
})
















/// 封装函数
function x(n) {
    if (n > 6) {
        n = n % 6
        if (n === 0) {
            n = 6
        }
    } // n = 1 2 3 4 5 6 
    return n
}

function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function start() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current') .siblings().addClass('enter') 
}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}

function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
}

