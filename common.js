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