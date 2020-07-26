<?
session_start();

if (!isset($_SESSION['login_account']) || $_SESSION['login_account'] != 1) {
    header('Location: login.php');
}
//调用数据库接口
require('../diy/quanju.php');
if( isset($_GET['r']) && $_GET['r'] == 1 && isset($_GET['msg'])  && $_GET['msg'] != '' ) {
    $sql = "SELECT msgList FROM MSG WHERE `msgList` = '{$_GET['msg']}'" ;
    $result = $conn->query($sql);
    
    if ($result && $row = mysqli_fetch_array($result)) {
        if($row['msgList'] == $_GET['msg']){
            exit('-2'); //请勿重复输入
        }
    }
    $time = time();
    $sql = "INSERT INTO `MSG` (`msgList`,`name`,`time`) VALUES ('{$_GET['msg']}','{$_SESSION['name']}','{$time}');";
    $result = $conn->query($sql);
    if($result){
        exit('1');
    }
}
if(isset($_GET['r']) && $_GET['r'] == 1 && isset($_GET['msg'])  && $_GET['msg'] == ''){
    exit('a');
}

// page2 获奖时间限制
if (isset($_GET['startPrize']) && $_GET['startPrize'] == '1') {
    //插入时间
    $time = time();
    require '../diy/quanju.php';
    $sql = "UPDATE `pokemon` SET `prize_shijian` = '{$time}' WHERE `account` = '{$_SESSION['name']}';";
    $result = $conn->query($sql);
    if($result){
        exit('1');
    }else{
        exit('-1');
    }
}
if (isset($_GET['insertPrize']) && $_GET['insertPrize'] == '1') {
    //插入时间
    $time = time();
    require '../diy/quanju.php';
    $sql = "INSERT INTO `prize` (`prize`,`name`,`prize_time`) VALUES ('{$_GET['result']}','{$_SESSION['name']}','{$time}');";
    $result = $conn->query($sql);
    if($result){
        exit('1');
    }else{
        exit('-1');
    }
}
if (isset($_GET['endPrize']) && $_GET['endPrize'] == '1') {
    //计算剩余时间，并将时间返回给前端
    $time = time();
    require '../diy/quanju.php';
    $sql = "SELECT prize_shijian FROM pokemon WHERE `account` = '{$_SESSION['name']}'";
    $result = $conn->query($sql);
    if($result && $row = mysqli_fetch_array($result)){
        if (isset($row['prize_shijian'])) {
            $t = ($row['prize_shijian'] + 86400) - $time;
            if ($t > 0) {
                exit($t.'');
            }else{
                exit('-2');
            }
        }else{
            exit('-3');
        }
    }else{
        exit('-5');
    }  

} 


// page3
$getall = 0;
if(isset($_GET['getall']) && $_GET['getall'] == '1'){
    $getall = 1;
}            
$getprize = 0;
if(isset($_GET['getPrize']) && $_GET['getPrize'] == '1'){
    $getprize = 1;
}


if ($getall == 0 && $getprize == 0) {
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>

  
</head>

<body>
    <div class="welcomeDiv">
        <img src="images/welcome.jpg" class="welcome">
    </div>
<!-- Page1 -->
    <div class="pagen">
            <h1>欢迎LYY公主嫁到 <br> 
                <img src="images/bixin.png" alt="">
                </h1>
            
                <div>
                    <button id="btn1" >戳我一下</button>
                </div>
            
                <div id="caidan" class="caidan">
                    <h5>恭喜你获得隐藏彩蛋哦！机会十分难得<br>
                        请问世界上谁最爱你！</h5>
                    
                    <button class="xuanxiang">李贵星</button>
                    <button class="xuanxiang">还是李贵星</button>
                </div>
                    
                    <p id="tijiao-info"></p>
               
                
    </div>

<!-- Page2 -->
    <div class="pagen">
        <ul class="prizeUl">
            <li class="prizeLi">啵两个</li>
            <li class="prizeLi">啵一个</li>
            <li class="prizeLi">谢谢参与</li>
            <li class="prizeLi">啵一个</li>
            <li class="prizeLi">睡觉券</li>
            <li class="prizeLi">吃饭券</li>
            <li class="prizeLi">5.20红包</li>
            <li class="prizeLi">谢谢参与</li>
            <li class="prizeLi">公主抱</li>
            <li class="prizeLi">蛤蟆背</li>
        </ul> 
        <div class="startDiv">
            <button class="btnPrize">开始抽奖</button>
        </div>
        <div class="prizeRecord">
        <p>每天只有一次抽奖的机会哦~!</p>
            <button class="prizeBtn">中奖记录</button>
<? 
    }
?>   

<? if ( $getprize == 1) { ?>
            <table class="prizeList">
                <thead>
                    <tr>
                        <th>中奖内容</th>
                        <th>中奖人</th>
                        <th>时间</th>
                    </tr>
                </thead>
       
       
                <tbody>
<?  }
    if ( $getprize == 1) {
        $sql = "SELECT * FROM `prize` ORDER BY `prize_time` DESC";
        $result = $conn->query($sql);
        if($result){
            
        }else{
            exit('-3');
        }
        while ($row = mysqli_fetch_array($result)){
            $row['prize_time'] = date('Y年m月d日 H:i:s',$row['prize_time']);
            echo "<tr><td>{$row['prize']}</td><td>{$row['name']}</td><td>{$row['prize_time']}</td><tr>";
        }
        exit;
    }
?>
                </tbody>
            </table>
<?
    if ($getall == 0 && $getprize == 0) {
?>
        </div>

    </div>

   
<!-- Page3 -->
    <div class="pagen">
        <h1>留言墙</h1>
        <textarea id="msgArea" placeholder="有什么想说的，可以写下来哦！我都能看到！" cols="40" rows="5"></textarea> 
        <button id="send">发送</button>
        <p class="send-info"></p>

        <div id="msgList">
<? 
    }
?>

    <table class="msgList">
        <thead>
            <tr>
                <th>评论</th>
                <th>评论人</th>
                <th>时间</th>
            </tr>
        </thead>

        <tbody>


<?php
    $sql = "SELECT * FROM `MSG` ORDER BY `time` DESC";
        if ($getall != 1) {
            $sql .= ' LIMIT 10';
        }
    $result = $conn->query($sql);
    if($result){
        
    }else{
        exit('-3');
}

    while ($row = mysqli_fetch_array($result)){
    $row['time'] = date('Y年m月d日 H:i:s',$row['time']);
    echo "<tr><td>{$row['msgList']}</td><td>{$row['name']}</td><td>{$row['time']}</td><tr>";
    }
?>

        </tbody>
    </table>

       
<?php
if ($getall == 0 && $getprize == 0) {
?>       
        </div>

    </div>

<!-- Page4 -->
    <div class="pagen">
        <button id="back" onclick="window.location.replace('login.php?out=1')">退出登录</button>
        <img class="page4img" src="images/baby1.jpg" alt="">
        <img class="page4img" src="images/baby1.jpg" alt="">    
        
    </div>
<!-- footer -->
    <div class="footer">
            <ul class="footer-ul">
                <li class="footer-li"><img id="footerli1" src="images/footerli1.png">
                </li><li class="footer-li"><img id="footerli2" src="images/footerli2.png">
                </li><li class="footer-li"><img id="footerli3" src="images/footerli3.png">
                </li><li class="footer-li"><img id="footerli4" src="images/footerli4.png">
                </li>
            </ul>
    </div>


<script>
    var last_bt = null;
    $(document).ready(function () {

        setTimeout(() => {
            // 欢迎页面
            $(".welcomeDiv").fadeOut();
            // 默认首页显示
            $(".pagen").eq(0).fadeIn();
            $(".footer").fadeIn();
            $(".footer-li>img").eq(0).attr('src',after[0]);
        }, 1000);
        
    


//将图片路径设为数组
        var before = ['images/footerli1.png','images/footerli2.png','images/footerli3.png','images/footerli4.png'];  
        var after = ['images/footerli1hover.png','images/footerli2hover.png','images/footerli3hover.png','images/footerli4hover.png'];  

//整个footer-li被触摸事件
        $(".footer-li").on('touchstart',function () {
            //index（0-3）
            var index = $(this).index();
            //重置其他三个按钮，显示目前点击这一按钮
            for (let i = 0; i < 4; i++) {
                $(".footer-li>img").eq(i).attr('src',before[i]);
            }
            $(".footer-li>img").eq(index).attr('src',after[index]);
            //隐藏其他三页，显示目前点击这一页
            for (let i = 0; i < 4; i++) {
                $(".pagen").eq(i).hide();
            }
            $(".pagen").eq(index).show()
        });

// Page 1
        var flag = 0
        $("#btn1").click(function(){
            flag = !flag;
            if ( flag ) {
                $("#caidan").css({display:'block'});
            }else {
                $("#caidan").css({display:'none'});
            }
        })
        $(".xuanxiang").click(function(){
            if($("#tijiao-info").html() == '') {
                $("#tijiao-info").html("恭喜你答对了！亲一个！");
                return;
            }
            if($("#tijiao-info").html() == '恭喜你答对了！亲一个！') {
                $("#tijiao-info").html("都说了李贵星咯！！");
                return;
            }
            if($("#tijiao-info").html() == '都说了李贵星咯！！') {
                $("#tijiao-info").html("别点了！李贵星就是最爱你的人");
                
            }

            window.scrollTo(0,0);
            
        })
// Page 2
        let List = $(".prizeLi");
        let iid = null;
        let tid = null;
        let i = 0;
        let k = 0;
        $(".btnPrize").click( () => {
            let randomx = random();
            // console.log(randomx);
            fastGun();
            if( tid != null){
                clearTimeout(tid);
            }
            tid = setTimeout(() => {
                clearInterval(iid);
                iid = null;
                result();
            }, randomx*1000);

            $.get('?startPrize=1' ,function(res){   
                console.log(res);
                if( res == 1){
                    $(".btnPrize").html('重新抽奖（86400秒）');
                    $(".btnPrize").attr('disabled',"true");
                    jishi(86400);
                }else if( res == -1 ){
                    alert('错误代码：-1');
                }
    
            });
        })
        function random(){
            let randomx = Math.floor(Math.random()*10);
            return randomx >= 2 ? randomx : randomx + 4 ; 
        }
        function fastGun(){
            if( iid != null){
                clearInterval(iid);
            }
            iid = setInterval(() => {
                k = gunDongIndex();
                changeColor();            
            }, 300);
        }
        function gunDongIndex(){
            switch (i) {
                case 3:
                    k = 4;
                    break; 
                case 4:
                    k = 6;
                    break;                    
                case 5:
                    k = 9;
                    break; 
                case 6:
                    k = 8;
                    break;                    
                case 7:
                    k = 7;
                    break; 
                case 8:
                    k = 5;
                    break;                    
                case 9:
                    k = 3;
                    break; 
                default:
                    k = i;
                    break;
            }
            return k;
        }
        function changeColor(){
            List.eq(k).css({'background-color':'rgb(224, 102, 2)'});
            List.eq(k).siblings().css({'background-color':'rgb(167, 167, 167)'});
            i++;
            // console.log(i);
            if( i == 10){ 
                i = 0;
            }
        }
        function result(){
            let result = List.eq(k).html();
            console.log(k);
            alert(`恭喜你获得了 ${result} ,请联系我获得奖品吧！`);
            $.get('?insertPrize=1&result=' + result ,function(res){   
                console.log(res);
                
            });
            


        }
        
        $.get('?endPrize=1',function(res){
            console.log(res);
            var t = parseInt(res);
            console.log(t);
            if (t < 0) {
                $(".btnPrize").removeAttr('disabled');
            }else{
                $(".btnPrize").attr('disabled',"true");
                jishi(t);
            }
        });
        function jishi(jishi){
            jishiid = setInterval(function(){
                jishi --;
                $(".btnPrize").html('重新抽奖（' + jishi + '秒）');
                if (jishi <= 0) {
                    clearInterval(iid);
                    jishiid = null;
                    $(".btnPrize").removeAttr('disabled');
                    $(".btnPrize").html('抽奖');
            
                }
            },1000);
        }

        $(".prizeBtn").click(function(){
            // window.location.replace('prize.php');
            $(".prizeRecord").load('?getPrize=1');
        });

// Page 3 
        $("#send").click(function(){
            $.get('?msg=' + $("#msgArea").val() + '&r=1' ,function(res){  
                console.log(res); 
            })
            $("#msgList").load('?getall=1');
            $("#msgArea").val('');
        });


            
    });
    

</script>
</body>

</html>
<?php
}
?>