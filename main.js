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

    })







    // $buttons.eq(0).on('click', function(){
    //     if(current == 5){
    //         $slides.css({transform:'translateX(-2100px)'})
    //             .one('transitionend', function(){
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform:'translateX(-300px)'})
    //                     .show()
    //             })    
    //     }else{
    //         $slides.css({transform:'translateX(-300px)'})    
    //     }
    //     current = 0
    // })
    // $buttons.eq(1).on('click', function(){
    //     $slides.css({transform:'translateX(-600px)'})
    //     current = 1
    // })
    // $buttons.eq(2).on('click', function(){
    //     $slides.css({transform:'translateX(-900px)'})
    //     current = 2
    // })
    // $buttons.eq(3).on('click', function(){
    //     $slides.css({transform:'translateX(-1200px)'})
    //     current = 3
    // })
    // $buttons.eq(4).on('click', function(){
    //     $slides.css({transform:'translateX(-1500px)'})
    //     current = 4
    // })
    // $buttons.eq(5).on('click', function(){
    //     if(current == 0){
    //         $slides.css({transform:'translateX(0px)'})
    //             .one('transitionend', function(){
    //                 $slides.hide()
    //                     .offset()
    //                 $slides.css({transform:'translateX(-1800px)'})
    //                     .show()
    //         })
    //     }else{
    //         $slides.css({transform:'translateX(-1800px)'})
    //     }
    //     current = 5
    // })
}

function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq(5).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)    
}