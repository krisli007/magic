<?
session_start();

if (isset($_GET['out']) && $_GET['out'] == '1') {
    $_SESSION['login_account'] = 0;
    header('Location: login.php');
    exit;
}

if (isset($_SESSION['login_account']) && $_SESSION['login_account'] == '1') {
    header('Location: index.php');
    exit;
}
if (isset($_GET['a']) && $_GET['a'] == '1' ) {
    if( isset($_POST['account']) && strlen($_POST['account']) > 6 && strlen($_POST['account']) < 20 ){
    require '../diy/quanju.php';
    $sql = "SELECT account,pwd FROM pokemon WHERE `account` = '{$_POST['account']}'";
    $result = $conn->query($sql);
    if($result && $row = mysqli_fetch_array($result)){
        if($row['account'] == $_POST['account']) {
            if ($row['pwd'] == $_POST['pwd']) {
                setcookie("account",$_POST['account'], time() + 3600 * 24 * 30,'/');
                $_SESSION['login_account'] = 1;
                $_SESSION['name'] = $_POST['account'];
                exit ('1');  //登陆成功
            }else{
                exit ('-2'); //密码输入错误
            }
        }
    }exit ('-1'); //账号不存在
    }

}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登录界面</title>
    <link rel="stylesheet" href="css/login.css">
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
</head>
<body>
<h1>
    <div><img class="logo" src="images/logo.png" alt=""></div>
    <div><img class="logo2" src="images/pokemon.png" alt=""></div>
</h1>
<div id="loginBox">
    <div id="loginForm">
        <div id="error-info"></div>
        <input type="text" id="account" class="text1" placeholder="输入账号" autocomplete="off">
        
        <input type="password" id="pwd" class="text1" placeholder="输入密码">

        <input type="button" id="loginBtn" class="loginBtn" value="登录" >
        
        <a class="forget" href="">手机登录</a>
    </div>
        
</div>

<script>
    $("#account").val($.cookie('account'));

    $(document).ready(function(){
        $("#loginBtn").click(function(){
            if($("#account").val() == "" || $("#account").val().length < 6 || $("#account").val().length > 20 ){
                $("#error-info").html('账号格式不对');
            }
            else if($("#pwd").val() == "" ){
                $("#error-info").html('请输入密码');
            }else {
                // 传递参数给自身，相当于给个id，规范。 （可省略访问的地址）
                $.post('?a=1',{ account:$("#account").val(),
                                    pwd:$("#pwd").val()
                                    },function(res){
                                    // console.log(res);
                                    if ( res == -1) {
                                        $("#error-info").html('账号不存在');;
                                    }else if( res == -2 ){
                                        $("#error-info").html('密码错误，请重新输入');
                                    }else if(res ==  1 ){
                                        $("#error-info").html('登陆成功！');
                                        setTimeout(function(){
                                            window.location.replace('index.php');
                                        },1000);
                                    }
                });
            }
            

    });
    })



</script>


</body>
</html>