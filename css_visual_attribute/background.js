// （1）background-clip 背景的绘制位置
var clip_box = document.getElementById('clip_box')
document.getElementById('clip_form').addEventListener('click', (e) => {
    if (e.target.name === 'clip') {
        clip_box.setAttribute('style', `background-clip:${e.target.value}`)
    }
})

// （3）背景图片的处理
var size_form = document.getElementById('size_form')
var repeat_form = document.getElementById('repeat_form')
var position_form = document.getElementById('position_form')
var image_box = document.getElementById('image_box')
function handleImage() {
    image_box.setAttribute('style', `background-size:${size_form.size.value}; 
    background-repeat:${repeat_form.repeat.value}; 
    background-position:${position_form.position.value}`)
}
size_form.addEventListener('click', handleImage)
repeat_form.addEventListener('click', handleImage)
position_form.addEventListener('click', handleImage)

// （4）backgroun-origin
var origin_box = document.getElementById('origin_box')
document.getElementById('origin_form').addEventListener('click', (e) => {
    if (e.target.name === 'origin') {
        origin_box.setAttribute('style', `background-origin:${e.target.value}`)
    }
})
