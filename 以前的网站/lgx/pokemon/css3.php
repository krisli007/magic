<?

if (isset($_POST['img']) && $_POST['img'] == '1') {
    echo 'ok';
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
    <style>
        h1 {
            font-family:"微软雅黑";
            font-size:40px;
            margin:20px 0;
            border-bottom:solid 1px #ccc;
            padding-bottom:20px;
            letter-spacing:2px;
        }
        .time-item strong {
            background:#C71C60;
            color:#fff;
            line-height:49px;
            font-size:36px;
            font-family:Arial;
            padding:0 10px;
            margin-right:10px;
            border-radius:5px;
            box-shadow:1px 1px 3px rgba(0,0,0,0.2);
        }
        #day_show {
            float:left;
            line-height:49px;
            color:#c71c60;
            font-size:32px;
            margin:0 10px;
            font-family:Arial,Helvetica,sans-serif;
        }
        .item-title .unit {
            background:none;
            line-height:49px;
            font-size:24px;
            padding:0 10px;
            float:left;
        }
    </style>
</head>
<body>



    <input type="file" accept="image/*" id="image" multiple="multiple">


    <input type="file" accept="image/*" id="camera" capture="camera">
    
        
    <div id="myDiv"><h2>通过 AJAX 改变文本</h2></div>
    <button id="b1" type="button">改变内容</button>


 

    <div class="prizeRecord">
        <button class="prizeBtn">sdasdasd</button>
    </div>


<script type="text/javascript">


    $(".prizeBtn").click(function(){
            $(".prizeRecord").load('prize.php?getprize=1');
        });

</script>

</body>
</html>