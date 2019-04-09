let $buttons = $('#button>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq(5).clone(true)

$slides.append($firstCopy)
$slides.prepend($lastCopy)

let current = 0

$buttons.eq(0).on('click', function(){
    if(current == 5){

    }
    $slides.css({transform:'translateX(0px)'})
    current = 0
})
$buttons.eq(1).on('click', function(){
    $slides.css({transform:'translateX(-300px)'})
    current = 1
})
$buttons.eq(2).on('click', function(){
    $slides.css({transform:'translateX(-600px)'})
    current = 2
})
$buttons.eq(3).on('click', function(){
    $slides.css({transform:'translateX(-900px)'})
    current = 3
})
$buttons.eq(4).on('click', function(){
    $slides.css({transform:'translateX(-1200px)'})
    current = 4
})
$buttons.eq(5).on('click', function(){
    if(current == 0){

    }
    $slides.css({transform:'translateX(-1500px)'})
    current = 5
})