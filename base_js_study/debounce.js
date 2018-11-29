// 函数防抖实现 连续滑动滚动条时清除定时器 停止滑动再触发

function cb() {
    alert(123);
}

let timer = false; 

window.onscroll = function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        console.log('debounce');
        cb();
    }, 300);
}


// 函数 防抖 节流 可用 lodash 上的方法