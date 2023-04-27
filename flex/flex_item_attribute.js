// （2）align - self 单个项目在交叉轴上的对齐方式
var align_box = document.getElementById('align-box')
document.getElementById('align-form').addEventListener('click', (e) => {
    switch (e.target.value) {
        case 'flex-start':
            align_box.className = 'flex border align_flex_start'
            break
        case 'center':
            align_box.className = 'flex border align_center'
            break
        case 'flex-end':
            align_box.className = 'flex border align_flex_end'
            break
        case 'baseline':
            align_box.className = 'flex border align_baseline'
            break
        case 'stretch':
            align_box.className = 'flex border align_stretch'
            break
    }
})

var box_align_self = document.getElementById('box_align_self')
document.getElementById('align-self-form').addEventListener('click', (e) => {
    box_align_self.classList.remove('align_self_flex_start', 'align_self_center', 'align_self_flex_end',
        'align_self_baseline', 'align_self_stretch')
    switch (e.target.value) {
        case 'flex-start':
            box_align_self.classList.add('align_self_flex_start')
            break
        case 'center':
            box_align_self.classList.add('align_self_center')
            break
        case 'flex-end':
            box_align_self.classList.add('align_self_flex_end')
            break
        case 'baseline':
            box_align_self.classList.add('align_self_baseline')
            break
        case 'stretch':
            box_align_self.classList.add('align_self_stretch')
            break
    }
})

// （3）flex-grow 项目的放大比例
var box_flex_grow_1 = document.getElementById('box_flex_grow_1')
var box_flex_grow_2 = document.getElementById('box_flex_grow_2')
var box_flex_grow_3 = document.getElementById('box_flex_grow_3')
document.getElementById('flex_grow_form_1').addEventListener('click', (e) => {
    box_flex_grow_1.setAttribute('style', `flex-grow:${e.target.value}`)
})
document.getElementById('flex_grow_form_2').addEventListener('click', (e) => {
    box_flex_grow_2.setAttribute('style', `flex-grow:${e.target.value}`)
})
document.getElementById('flex_grow_form_3').addEventListener('click', (e) => {
    box_flex_grow_3.setAttribute('style', `flex-grow:${e.target.value}`)
})


// （4）flex-shrink 项目的缩小比例
var box_flex_shrink_1 = document.getElementById('box_flex_shrink_1')
var box_flex_shrink_2 = document.getElementById('box_flex_shrink_2')
var box_flex_shrink_3 = document.getElementById('box_flex_shrink_3')
document.getElementById('flex_shrink_form_1').addEventListener('click', (e) => {
    box_flex_shrink_1.setAttribute('style', `flex-shrink:${e.target.value}`)
})
document.getElementById('flex_shrink_form_2').addEventListener('click', (e) => {
    box_flex_shrink_2.setAttribute('style', `flex-shrink:${e.target.value}`)
})
document.getElementById('flex_shrink_form_3').addEventListener('click', (e) => {
    box_flex_shrink_3.setAttribute('style', `flex-shrink:${e.target.value}`)
})