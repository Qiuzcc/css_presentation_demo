// （1）flex-direction 排列方向
var direction_box = document.getElementById('direction-box')
document.getElementById('direction-form').addEventListener('click', function (event) {
    // console.log(event.target.value)
    var direction = event.target.value
    switch (direction) {
        case 'row':
            direction_box.className = 'flex border direction_row'
            break
        case 'row_reverse':
            direction_box.className = 'flex border direction_row_reverse'
            break
        case 'column':
            direction_box.className = 'flex border direction_column'
            break
        case 'column_reverse':
            direction_box.className = 'flex border direction_column_reverse'
            break
    }
})

// （2）flex-wrap 换行方式
var wrap_box = document.getElementById('wrap-box')
document.getElementById('wrap-form').addEventListener('click', function (e) {
    var wrap = e.target.value
    switch (wrap) {
        case 'nowrap':
            wrap_box.className = 'flex border nowrap'
            break
        case 'wrap':
            wrap_box.className = 'flex border wrap'
            break
        case 'wrap_reverse':
            wrap_box.className = 'flex border wrap_reverse'
            break
    }
})

// （3）justify-content 主轴对齐方式
var justify_box = document.getElementById('justify-box')
document.getElementById('justify-form').addEventListener('click', (e) => {
    var justify_content = e.target.value
    switch (justify_content) {
        case 'flex-start':
            justify_box.className = 'flex border justify_flex_start'
            break
        case 'center':
            justify_box.className = 'flex border justify_center'
            break
        case 'flex-end':
            justify_box.className = 'flex border justify_flex_end'
            break
        case 'space-between':
            justify_box.className = 'flex border justify_space_between'
            break
        case 'space-around':
            justify_box.className = 'flex border justify_space_around'
            break
    }
})

// （4）align-items 交叉轴对齐方式
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

// （6）align-content 多根轴线的对齐方式
var align_content_box = document.getElementById('align-content-box')
document.getElementById('align-content-form').addEventListener('click', (e) => {
    switch (e.target.value) {
        case 'flex-start':
            align_content_box.className = 'flex border wrap align_content_flex_start'
            break
        case 'center':
            align_content_box.className = 'flex border wrap align_content_center'
            break
        case 'flex-end':
            align_content_box.className = 'flex border wrap align_content_flex_end'
            break
        case 'space-around':
            align_content_box.className = 'flex border wrap align_content_space_around'
            break
        case 'space-between':
            align_content_box.className = 'flex border wrap align_content_space_between'
            break
        case 'stretch':
            align_content_box.className = 'flex border wrap align_content_stretch'
            break
    }
})