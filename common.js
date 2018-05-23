// 记录一些日常的问题积累

    /* 利用一个for循环实现冒泡排序

        思想：

            判断每次循环是否达到数组的倒数第二位

            达到了则重置循环的i，并且将数组长度的标识减去1
                
                意味着这个数据的最后一个无需再次判断，要么最大，要么最小
    */
    function oneFor() {
        let arr = [6, 5, 4, 3, 2, 1];
        let j = arr.length;
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var m = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = m;
            }
            if (i == j - 2) {
                i = -1;
                j--;
            }
        }
        console.log(arr)
    }
    oneFor();


    /* 操作overflow元素的滚动条

        jQuery：$('#content').scrollTop(200);

        原生Js：document.getElementById('content').scrollTop = 200;
     */



     /* String repeat 方法在某些浏览器中会报错，不被支持

        出错现象，在华为手机自带的浏览器中，有一个页面展示不出来，添加调试工具后发现，报错 undefined is not a function

        特此记录，若再出现类似报错，优先考虑某个特殊的方法不被浏览器支持

    */



    /* 安卓微信，H5页面点击输入框时，弹出的键盘高度会占据页面的总体高度

        如果这个时候有一个容器的高度大于页面高度减去键盘高度，多出的高度部分会被直接挡住，不可见

        开发时需要注意
     */