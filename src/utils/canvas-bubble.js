let canvas = null;

let ctx = null,//获取canvas2d
    nico = [],//创建一个储存所有圆信息的数组
    maki = null,//创建一个变量获取用于获取canvas传递
    AKUYA1 = 200,//this.p为1是最高漂浮高度
    AKUYA2 = 0.1,//一个左右颤抖的动画虽然并没有什么卵用就对了
    AKUYA3 = 0//为了当值上面颤抖过快AKUYA3每循环10次执行一次抖动
function Naive(x, y, rgba, pi, h, hm, p) {
    this.x = x;
    this.y = y;
    this.p = p;
    this.rgba = rgba;
    this.pi = pi;
    this.h = h;
    this.hm = hm;
    //将变量归属当前对象
    this.zhenji = function (ctx) {
        ctx.fillStyle = "rgba(255, 255, 255," + this.rgba + ")";//画布下一个圆颜色this.rgba获取传递的参数透明度
        ctx.beginPath();//更新路径
        ctx.arc(this.x + this.h, this.y, this.pi, 0, Math.PI * 2, true);
        //开始画圆（x值传递过来的宽度+抖动这个没卵用的东西，y值，圆大小，0我也不知道是什么东西，画一个整圆，这个true我也不知道干什么的感觉没区别的样子懒得查了）；
        ctx.fill();//充填当前圆
        this.rgba -= 0.5 / AKUYA1;//圆淡出每次循环淡出量为0.5/AKUYA1
        if ((this.hm + 10) % 10 == 0) {//
            if (this.h == 0.1) {
                this.h = -0.1;
            } else {
                this.h = 0.1;
            }//每循环十次向左或向右移动0.1px
        }
        this.hm++;
    }
    this.amr = function () {//动画效果
        this.y -= this.p;//amr每执行一次圆的高度就会减少this.p的数值
    }
}


function excuseme() {//嗯嗯你没看错这是一个事件
    ctx.clearRect(0, 0, canvas.width, canvas.height);//将画布清空清空范围 (x, y, width, height)
    let p = Math.random()
    var naive = new Naive(Math.random() * canvas.width, canvas.height, Math.random() * 0.5, Math.random() * 5, AKUYA2, AKUYA3, Math.random()*1.1);
    //创建一个圆的信息附加到naive 信息(x, y, 半径, 透明度0.0-0.5, 附加AKUYA2, 附加AKUYA3, 每帧上升速度0-2);
    nico.push(naive);//吧naive的信息添加到数组
    for (var i = 0; i < nico.length; i++) {//每循环一次都会执行一次.zhenji和.amr
        maki = nico[i];//当前数组信息附加给maki变量
        maki.zhenji(ctx);//执行Naive下zhenji
        maki.amr();//执行Naive下amr
    }
    if (nico.length > AKUYA1) {
        nico.shift();//超过最高漂浮删除数组
    }
}

export default function toInitCanvas(dom) {
    canvas = typeof dom === "string" ? document.getElementById(dom) : dom
    canvas.width = document.body.clientWidth;//canvas画布宽度等于窗口宽度
    canvas.height = document.body.clientHeight;//canvas画布高度等于窗口高度

    ctx = canvas.getContext('2d')
    AKUYA1 = canvas.height / 2;//this.p为1是最高漂浮高度

    setInterval(excuseme, 2);//每秒执行200次excuseme事件

    window.onresize = function () {//如果屏幕分辨率发生改变触发
        AKUYA1 = canvas.height / 2;//this.p为1的话漂浮最高高度
        canvas.width = document.body.clientWidth;//canvas画布宽度等于窗口宽度
        canvas.height = document.body.clientHeight;//canvas画布高度等于窗口高度
        excuseme();//重新执行excuseme事件
    }
}


