let $buttons = $('#button>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform:'translateX(-300px)'})
bindEvents()





//封装优化代码

function bindEvents(){
    $('#button').on('click', 'button', function(x){
        let $button = $(x.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index){
    if(current === $buttons.length-1 && index === 0){
        //最后一张到第一张
        $slides.css({transform:`translateX(${-($buttons.length + 1)*300}px)`})
            .one('transitionend', function(){
                $slides.hide().offset()
                $slides.css({transform:`translateX(${-(index+1)*300}px)`}).show()
            })

    }else if(current === 0 && index === $buttons.length-1){
        $slides.css({transform:`translateX(0px)`})
            .one('transitionend', function(){
                $slides.hide().offset()
                $slides,css({transform:`translateX(${-(index+1)*300}px)`}).show()
            })

    }else{
        $slides.css({transform:`translateX(${-(index+1)*300}px)`})
    }
    current = index
}

function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq(5).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)    
}