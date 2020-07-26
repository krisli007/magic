<?



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <style>
    li {
        /* list-style-image: url('images/me.png'); */
        list-style-position: outside;
        float: left;
        background-color: rgb(255, 0, 0);
        padding: 20px;
        margin: 10px;
    }
    .bg {
        position: relative;
        margin-top: 60px;
        width: 100%;
        height: 70vh;
        background: 
        url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567874546707&di=ba89a5b9deb908effac803f590c465e2&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190907%2Fc278c92498914b88b34b6ecd1fcb2c15.jpeg')                                             no-repeat right 200px,
        url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567874445349&di=1e409b58793e2cda942a01e73aa770ac&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20140817%2Fwanshuadexiongmao_2906693.jpg') no-repeat center center
    }
   
    a {
        color: rgb(255, 0, 0);
        text-decoration: none;
        padding: 20px;
    }
    a:hover {
        color: blue;
        background-color: rgb(177, 22, 22);
    }
    a:active {
        background-color: rgb(22, 177, 35);

    }
    a:visited {
        color: rgb(145, 145, 145);
    }
    .donghua1 {
        width: 100px;
        height: 100px;
        background-color: rgb(90, 46, 46);
        transition: all;
        transition-delay: 1s;
        transition-duration: 2s;
        transition-timing-function: ease-in-out;
    }
    .donghua1:hover {
        transform:  rotate(30deg) scale(0.8);
        transform-origin: 50% 0%;
    }
    .p {
        width: 208px;
        height: 103px;
        margin: 60px;
        border: 5px solid rgb(199, 16, 255);
        transition: all 0.5s ease ;
    }
    .p:hover {
        transform: scale(1.5) rotate(15deg);
    }
    .p1 {     
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567932407565&di=decb75bd4ecf7933c63e5c5177a78786&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F208x130%2F1415930858544.jpg') no-repeat center;
    } 
    .p2 {
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567932407565&di=decb75bd4ecf7933c63e5c5177a78786&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F208x130%2F1415930858544.jpg') no-repeat center;
    } 
    .p3 {
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567932407565&di=decb75bd4ecf7933c63e5c5177a78786&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F208x130%2F1415930858544.jpg') no-repeat center;
    }


    .keyframes {
        /* position 很关键，没有就不会动 */
        position: absolute;
        width: 200px;
        height: 200px;
        overflow: hidden;
        background-color: rgba(145, 17, 17, 0.979);
        transform-origin: 50% 0;
        animation-name: myrotate,mymove;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }
    @keyframes mymove {
        0% {top:10%; ;left:10%;}
        50% {top:30%; ;left:30%;}
        100% {top:50%; ;left:50%;}
    }
    @keyframes myrotate {
        0% {transform: rotate(-15deg)}
        50% {transform: rotate(15deg)}
        100% {transform: rotate(-15deg)}
    }
    iframe {
        float: right;
    }
    </style>
</head>

<body>

        
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=490163629&auto=0&height=66"></iframe>

    <div class="donghua1">

    </div>
    <div class="zhaopian">
        <div class="p1 p"></div>
        <div class="p2 p"></div>
        <div class="p3 p"></div>
    </div>

    <div class="keyframes">


    </div>
    <table>
    <tr class="abc">
        <td>aa</td>
        <td>kris</td>
        <td>3</td>
        <td>aa</td>
    </tr>
    <tr>
        <td>bb</td>
        <td>amy</td>
        <td>12</td>
        <td>aa</td>
    </tr>
    <tr>
        <td>cc</td>
        <td>jhon</td>
        <td>20</td>
        <td>aa</td>
    </tr>
    </table>
    <div id="div23" style="background-color: rgb(145, 17, 17);">sadsadsadsad</div>
    <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br> bbbbbbbbbbbbbbbbbb</div>  
    sadsadasd
    <script>

        $(function() {
            let arr = [];
            let x = navigator;
            console.log(x);

            // $("#div23").click(function(){
            //     console.log($(this));
            //     $(this).next().toggle();
            // })  
            $("#div23").one('click',function(){
                console.log($(this));
                $(this).next().toggle();
            })
            $(this).mousemove(function(e) {
                console.log(e);
                console.log('移动的X位置：' + e.pageX + ' ' + e.pageY);

            })

        })
        // let d = new Date();
        // let t = d.getTime();
        // let y = d.getDate();
        // console.log(t,y);

        // let arr = [1,2,3,4,5];
        // let arrr = ['a','b','c','d'];
        // arrr.splice(2,2,'hahahah');
        // console.log(arrr);
        // console.log(arr.join('--'));
        // console.log(arr.shift());
        // console.log(arr.push('a','b','c'));
        // console.log(arr.sort());
        // console.log( arr.toString());

      
    

    </script>
</body>

</html>