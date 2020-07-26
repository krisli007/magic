<?
if( isset($_GET['r']) && $_GET['r'] == 1 ){
    if( isset($_POST['account']) && isset($_POST['pwd']) && isset($_POST['sjh'])){
        if (strlen($_POST['account']) > 6 && strlen($_POST['account']) <20) {
            if (strlen($_POST['pwd']) > 6 && strlen($_POST['pwd']) <20) {
                if (strlen($_POST['sjh']) == 11 ) {
                    require('../diy/quanju.php');
                    $sql = "SELECT account FROM pokemon WHERE `account` = '{$_POST['account']}';";
                    $result = $conn->query($sql);
                    if ($result && $row = mysqli_fetch_array($result)) {
                        if($row['account'] == $_POST['account'] ){
                            exit('-4'); //账号已注册
                        } 
                    }else {

                        $sql = "UPDATE `pokemon` SET `account` = '{$_POST['account']}',`pwd` = '{$_POST['pwd']}' WHERE `sjh` = '{$_POST['sjh']}';";
                        $result = $conn->query($sql); //执行$sql,成功后返回1
                        exit('1');
                    }
                }else {
                    exit('-3'); //手机号格式不对
                }
            }else {
                exit('-2'); //密码长度不对
            }
        }else {
            exit('-1'); //账号长度不对
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>注册界面</title>
    <link rel="stylesheet" href="css/register.css">
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>

</head>

<body>
    <h1>
        <div><img class="logo" src="images/logo.png" alt=""></div>
        <div><img class="logo2" src="images/pokemon.png" alt=""></div>
        <div><img class="logo3" src="images/register-title.png" alt=""></div>
    </h1>
    <div id="div1">
        <div id="registerBox">
            <input type="text" id="account" class="text1" placeholder="输入您的账号" autocomplete="off"> <img id="img1">
            <p id="info1"></p>

            <input type="password" id="pwd" class="text1" placeholder="输入您的密码" autocomplete="off"><button id="eye">n</button> <img id="img2">
            <p id="info2"></p>

            <input type="text" id="sjh" class="text1" placeholder="输入您的手机号"> <img id="img3">
            <p id="info3"></p>
            <input type="number" id="yzm"><button class="get-yzm" disabled="disabled">获取验证码</button>
            <p id="info5"></p>

            <input type="button" id="registerBtn" class="registerBtn" value="注册" >
        </div>
            <p id="info4"></p>
    </div>

    <script>

    $(document).ready(function() {
        
        $("#account").on('blur',function(){
            if ($("#account").val() == '') {
                imgChange(0,$("#img1"));
                $("#info1").html('账号不能为空');
            }else if ($("#account").val().length <= 6 || $("#account").val().length >= 20){
                imgChange(0,$("#img1"));
                $("#info1").html('账号必须6位以上,20位以下');  
            }else {
                imgChange(1,$("#img1"));
                $("#info1").html('');
            }
        });
        //当密码失去焦点时候
        $("#pwd").on('blur',function(){
            if ($("#pwd").val() == '') {
                imgChange(0,$("#img2"));
                $("#info2").html('密码不能为空');
            }else if ($("#pwd").val().length <= 6 || $("#account").val().length >= 20){
                imgChange(0,$("#img2"));
                $("#info2").html('密码必须6位以上,20位以下');
            }else {
                imgChange(1,$("#img2"));
                $("#info2").html('');
            }
        });
         //当手机号失去焦点时候
        $("#sjh").on('blur',function(){
            scrollTop();
            if ($("#sjh").val() == '' || $("#sjh").val().length != 11 ) {
                imgChange(0,$("#img3"));
                $("#info3").html('手机号格式不对');
            }else {
                imgChange(1,$("#img3"));
                $("#info3").html('');
            }
        });

        function imgChange(a,b) {
            if( a == 0 ){
                b.attr('src','images/shibai.png');
            }else {
                b.attr('src','images/chenggong.png');
            }
        }
        function scrollTop() {
            window.scrollTo(0,$(window).height());
        }

        var eye = false;
        $("#eye").on('touchstart',function(){
            eye = !eye;
            console.log(eye);
            if (eye) {
                $("#pwd").attr("type", "text");
                $("#eye").css("background","url('./images/eye.png') no-repeat center")
            }else {
                $("#pwd").attr("type", "password");
                $("#eye").css("background","url('./images/eyec.png') no-repeat center")
            }
            
        });
		
        $("#sjh").val($.cookie('register_sjh'));

        $(".get-yzm").click(function(){
            //post到yzm文件夹下默认主页url url + 参数 = 赋值 'url?a=' + 2 + '&b=' + 3  
            $.get('yzm?poker_sjh=' + $("#sjh").val() + '&r=1' ,function(res){   
                console.log(res); 
                if (res == '-5') {
                    $("#info5").html('请确认是否收到验证码，稍后再试一次。');
                }else if (res == '-3') {
                    $("#info5").html('刚才已经获取过验证码了，请用刚才的验证码，或者3分钟后再试。');
                }else if (res == '-2') {
                    $("#info5").html('此手机号已注册');
                }else if(res == '-1'){
                    $("#info5").html('手机格式不对');
                }else if(res == '1'){
                    $(".get-yzm").html('重发（180秒）');
                    $(".get-yzm").attr('disabled',"true");
                    $("#info5").html('发送成功!请在三分钟内填写');
                    jishi(180);
                }else{
                    $("#info5").html('发送失败，请截图。错误代码：' + res);
                }
            });
        });

        $.get('yzm?getYzmTime=1',function(res){
            var t = parseInt(res);
            console.log(res);
            if (t < 0) {
                $(".get-yzm").removeAttr('disabled');
            }else{
                $(".get-yzm").attr('disabled',"true");
                jishi(t);
            }
        });

        function jishi(yzm_time){
            iid = setInterval(function(){
                yzm_time --;
                $(".get-yzm").html('重发（' + yzm_time + '秒）');
                if (yzm_time <= 0) {
                    clearInterval(iid);
                    iid = null;
                    $(".get-yzm").removeAttr('disabled');
                    $(".get-yzm").html('重发');
            
                }
            },1000);
        }



        $("#registerBtn").click(function(){
            //账号
            if ($("#account").val() == '') {
                $("#info1").html('账号不能为空');
            }   
            //密码
            if ($("#pwd").val() == '') {
                $("#info2").html('密码不能为空');
            }
            //手机号
            if ($("#sjh").val() == '' ) {
                $("#info3").html('手机号不能为空');
            }
            //验证码
            if ($("#yzm").val() == '' ) {
                $("#info5").html('验证码不能为空');
            }
            //提交到后台
            if($("#account").val() != '' && $("#pwd").val() != '' && $("#sjh").val() != '' ){
                $.post("?r=1", {  account: $("#account").val(),
                                    pwd: $("#pwd").val(),
                                    sjh: $("#sjh").val(),
                                    yzm: $("#yzm").val()
                                    },function(res){
                                        console.log(res);
                                        if ( parseInt(res) == -1 ){
                                            $("#info1").html('账号格式有误');
                                        }else if( parseInt(res) == -2){
                                            $("#info2").html('密码格式有误');
                                        }else if( parseInt(res) == -3){
                                            $("#info3").html('手机号格式有误');
                                        }else if( parseInt(res) == -4){
                                            $("#info1").html('该账号已被注册');
                                        }else if( parseInt(res) == -5){
                                            $("#info3").html('该手机号已被注册');
                                        }else if( parseInt(res) == 1){
                                            $("#info4").html('注册成功！正在跳转至登录页面');
                                            setTimeout(function(){
                                                window.location.href ='login.php'
                                            },1000);

                                        };
                                        });
            }
           
            
        });


       


    })

    </script>
</body>

</html>