// 函数节流实现  连续滚动滚动条 间隔300执行一次

function cb() {
    alert(123);
}

let flag = true;

window.onscroll = function() {
    if (!flag) {
        console.log('函数节流等待期');
        return;
    }

    flag = false;

    setTimeout(function() {
        cb();
        flag = true;
    }, 300);
}