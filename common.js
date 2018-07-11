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




     /* 
        获取两个时间相差的年月日
    */
   function getDiffer(str1,str2){
        if(str1 > str2) return '';
        let date1 = new Date(str1),date2 = new Date(str2);
        let y2 = date2.getFullYear(), m2 = date2.getMonth();
        let y = y2 - date1.getFullYear(), m = m2 - date1.getMonth(),d = date2.getDate() - date1.getDate();
        let md1 = [31,28,31,30,31,30,31,31,30,31,30,31];
        let md2 = md1.slice();
        md2[1] += 1;
        function isleap (year){
            return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
        }
        while(d < 0){
            m2--;
            d += isleap(y2) ? md2[m2] : md1[m2];
            m--;
        }
        while(m < 0){
            m += 12;
            y--;
        }
        return {
            year:y,
            month:m,
            day:d
        }
   }


   /**
    * 
    * click 和 touchstart 
    * 在需要精确点击的时候，若点击的对象一直在高速的移动，那么click事件里，点击的位置和点击对象的位置常常会匹配不上
    * 这个时候需要使用touchstart
    */
    

   /**
    * canvas 生成图像需要一定的时间，若生成图像之后，立即获取刚刚生成的对象，会获取不到（jc：jCanvaScript插件）
    * 
    */

    /**
     * Vue 调试手机设备 命令行启动客户端 vue-devtools
     * 页面头部添加下段代码
     * <script>
        window.__VUE_DEVTOOLS_HOST__ = '<your-local-ip>' // default: localhost
        window.__VUE_DEVTOOLS_PORT__ = '<devtools-port>' // default: 8098
        </script>
        <script src="http://<your-local-ip>:8098"></script>
     */

     /**
      * 关于 a 标签 写 href=”javascript:void(0);” 火狐 && ie 会跳转新页面的问题
      * 解决方法 写 onclick=”return false;”
      * 原因 在于三款浏览器，对三个属性的处理顺序不同
      *     Chrome顺序：onclick -> href -> target
      *     IE和Firefox顺序：onclick -> target -> href
      */

      /**
       * angular Js
       * ng-model 在双向绑定变量的时候，若直接绑定在 $scope.a 下，在js通过 $scope.a 取值时，会出现取不到的情况
       * 解决方法：定义 $scope.data = {a:''}，取值时用 $scope.data.a
       * 原因：目前不明
       */

       /**
        * @keyframes miaovIn{
            0%{
                // transform: translate(-193px,20px);
                // opacity: 0;
            }
            35%{
                width: 0px;
                opacity: 1;
                top: calc(~"100vh - 15px");
                left: 30px;
                transform: rotate(-720deg);
            }
            55%{
                width: 25px;
                opacity: 1;
                top: calc(~"100vh - 45px");
                left: 30px;
                transform: rotate(-720deg);
            }
            55%{
                width: 25px;
                opacity: 1;
                top: calc(~"100vh - 45px");
                left: 30px;
                transform: rotate(-720deg);
            }
            60%{
                width: 25px;
                opacity: 1;
                top: calc(~"100vh - 45px");
                left: 30px;
                transform: rotate(-720deg);
            }
            65%{
                width: 25px;
                opacity: 1;
                top: calc(~"100vh - 45px");
                left: 30px;
                transform: rotate(-720deg) scale(0.8);
            }
            100%{
                width: 0px;
                opacity: 0;
                top: calc(~"100vh - 15px");
                left: 30px;
                transform: rotate(0deg) scale(0.8);
            }
        }
        .sharkImg{
            width: 100%;
            position: fixed;
            top: 44px;
            z-index: 10000;
            &.active{
                animation: miaovIn 2s;
                animation-fill-mode: forwards;
            }
        }
        */