/*大屏*/
//自调用函数



(function() {
    // 1、页面一加载就要知道页面宽度计算
    var setFont = function() {
        // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
        var html = document.documentElement; // 获取html
        // 获取宽度
        var width = html.clientWidth;

        // 判断
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        // 设置html的基准值
        var fontSize = width / 80 + 'px';
        // 设置给html
        html.style.fontSize = fontSize;
    }
    setFont();
    // 2、页面改变的时候也需要设置
    // 尺寸改变事件
    window.onresize = function() {
        setFont();
    }
})();

(function() {
    //事件委托
    $('.monitor').on('click', ' a', function() {
        //点击当前的a 加类名 active  他的兄弟删除类名
        $(this).addClass('active').siblings().removeClass('active');
        //获取一一对应的下标 
        var index = $(this).index();
        //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
        $('.content').eq(index).show().siblings('.content').hide();
    });
    //滚动
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $('.monitor .marquee').each(function(index, dom) {
        //将每个 的所有子级都复制一遍
        var rows = $(dom).children().clone();
        //再将新的到的加入原来的
        $(dom).append(rows);
    });

})();
//封城次数
(function() {
    var myechart = echarts.init($('.pie')[0]);
    option = {
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#FFD700'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['北溟市', '洛水市', '羽山市', '南溟市'],
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        yAxis: [{
            type: 'value',
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        series: [


            {
                name: '2020',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134],
                label: {
                    show: true
                },


            },
            {
                name: '2021',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74],
                label: {
                    show: true
                },
            },
            {
                name: '2022',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84],
                label: {
                    show: true
                },
            }
        ]
    };
    myechart.setOption(option);
})();


//时间死亡
(function() {
    var myechart = echarts.init($('.thing')[0]);
    option = {
        color: ['#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#FFD700'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['北溟市', '洛水市', '羽山市', '南溟市'],
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        yAxis: [{
            type: 'value',
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        series: [


            {
                name: '2020',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134],
                label: {
                    show: true
                },


            },
            {
                name: '2021',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74],
                label: {
                    show: true
                },
            },
            {
                name: '2022',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84],
                label: {
                    show: true
                },
            }
        ]
    };
    myechart.setOption(option);
})();



//封城时间
(function() {
    var myechart = echarts.init($('.key')[0]);
    option = {
        color: ['#2E8B57', '#ea7ccc', '#5470c6', '#91cc75', '#fac858', '#3ba272', '#9a60b4', '#ee6666', '#73c0de', ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#FFD700'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['北溟市', '洛水市', '羽山市', '南溟市'],
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        yAxis: [{
            type: 'value',
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        series: [


            {
                name: '2020',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134],
                label: {
                    show: true
                },


            },
            {
                name: '2021',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74],
                label: {
                    show: true
                },
            },
            {
                name: '2022',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84],
                label: {
                    show: true
                },
            }
        ]
    };
    myechart.setOption(option);
})();
//封城人数
(function() {

    option = {
        color: ['#00FF00', '#fac858', '#9a60b4', '#3ba272', '#ea7ccc', '#5470c6', '#91cc75', '#ee6666', '#73c0de', ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#FFD700'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['北溟市', '洛水市', '羽山市', '南溟市'],
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        yAxis: [{
            type: 'value',
            axisLine: { lineStyle: { color: '#5F9EA0' } },
        }],
        series: [


            {
                name: '2020',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series',
                },
                data: [120, 132, 101, 134],
                label: {
                    show: true
                },


            },
            {
                name: '2021',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [60, 72, 71, 74],
                label: {
                    show: true
                },
            },
            {
                name: '2022',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                    focus: 'series'
                },
                data: [62, 82, 91, 84],
                label: {
                    show: true
                },
            }
        ]
    };
    var myechart = echarts.init($('.users .bar')[0]);
    myechart.setOption(option);
})();