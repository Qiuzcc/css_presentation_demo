// （1）border 探究
var width_form = document.getElementById('width_form')
var style_form = document.getElementById('style_form')
var color_form = document.getElementById('color_form')
var radius_form = document.getElementById('radius_form')
var radius_text = document.getElementById('radius_text')
var box1 = document.getElementById('box1')
function fn1() {
    box1.setAttribute('style', `border-width:${width_form.width.value};
    border-style:${style_form.style.value}; 
    border-color:${color_form.color.value};
    border-radius:${radius_form.radius.value}%`)
}

width_form.addEventListener('click', fn1)
style_form.addEventListener('click', fn1)
color_form.addEventListener('click', fn1)
radius_form.addEventListener('click', fn1)
radius_form.addEventListener('click', () => {
    radius_text.innerText = radius_form.radius.value + '%'
})

// （2）border的4条边
var top_width_form = document.getElementById('top_width_form')
var top_width_text = document.getElementById('top_width_text')
var right_width_form = document.getElementById('right_width_form')
var right_width_text = document.getElementById('right_width_text')
var bottom_width_form = document.getElementById('bottom_width_form')
var bottom_width_text = document.getElementById('bottom_width_text')
var left_width_form = document.getElementById('left_width_form')
var left_width_text = document.getElementById('left_width_text')
var content_size_form = document.getElementById('content_size_form')
var content_size_text = document.getElementById('content_size_text')
var box2 = document.getElementById('box2')
function fn2() {
    box2.setAttribute('style',
        `border-top-width:${top_width_form.width.value}px;
    border-right-width:${right_width_form.width.value}px;
    border-bottom-width:${bottom_width_form.width.value}px;
    border-left-width:${left_width_form.width.value}px;
    width:${content_size_form.size.value}px;
    height:${content_size_form.size.value}px;`)

    top_width_text.innerText = top_width_form.width.value
    right_width_text.innerText = right_width_form.width.value
    bottom_width_text.innerText = bottom_width_form.width.value
    left_width_text.innerText = left_width_form.width.value
    content_size_text.innerText = content_size_form.size.value
}
top_width_form.addEventListener('click', fn2)
right_width_form.addEventListener('click', fn2)
bottom_width_form.addEventListener('click', fn2)
left_width_form.addEventListener('click', fn2)
content_size_form.addEventListener('click', fn2)
