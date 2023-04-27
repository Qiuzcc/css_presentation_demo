// （1）grid-template-columns 定义列数和每列的宽度
var template_column_wrap = document.getElementById('template_column_wrap')
document.getElementById('template_column_form').addEventListener('click', (e) => {
    template_column_wrap.setAttribute('style', `grid-template-columns:${e.target.value}`)
})

// （2）grid-template-rows 定义每一行的高度
var template_rows_wrap = document.getElementById('template_rows_wrap')
document.getElementById('template_rows_form').addEventListener('click', (e) => {
    template_rows_wrap.setAttribute('style', `grid-template-rows:${e.target.value}`)
})

// （3）grid-gap 行距（grid-row-gap）和列距（grid-column-gap）的简写
var gap_wrap = document.getElementById('gap_wrap')
document.getElementById('gap_form').addEventListener('click', (e) => {
    if (e.target.name === 'gap')
        gap_wrap.setAttribute('style', `grid-gap:${e.target.value}`)
})

// （4）place-items 网格中元素的位置
var place_wrap = document.getElementById('place_wrap')
document.getElementById('place_form').addEventListener('click', (e) => {
    if (e.target.name === 'place') {
        place_wrap.setAttribute('style', `place-items:${e.target.value}`)
    }
})

// （6）grid-auto-flow 容器布局流
var flow_wrap_2 = document.getElementById('flow_wrap_2')
document.getElementById('flow_form2').addEventListener('click', (e) => {
    if (e.target.name === 'flow') {
        flow_wrap_2.setAttribute('style', `grid-template-rows:${e.target.value}`)
    }
})

var flow_wrap_3 = document.getElementById('flow_wrap_3')
document.getElementById('flow_form3').addEventListener('click', (e) => {
    if (e.target.name === 'flow') {
        flow_wrap_3.setAttribute('style', `grid-auto-flow:${e.target.value}`)
    }
})