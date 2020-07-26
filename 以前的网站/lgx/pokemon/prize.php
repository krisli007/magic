<?
session_start();
require('../diy/quanju.php');
$getprize = 0;
if(isset($_GET['getprize']) && $_GET['getprize'] == '1'){
    $getprize = 1;
}

$sql = "SELECT * FROM `prize` ORDER BY `prize_time` DESC";
$result = $conn->query($sql);
if($result){
    
}else{
    exit('-3');
}


if ($getprize != 1) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>奖品界面</title>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
</head>
<body>
    <div>
        <button class="back">返回</button>
    </div>   
    <? 
        }
    ?>    
    <p>sadsadsd</p>
    <div id="prizeList">
 
    <table class="prizeList">
        <thead>
            <tr>
                <th>中奖内容</th>
                <th>中奖人</th>
                <th>时间</th>
            </tr>
        </thead>

        <tbody>
        <?php
            while ($row = mysqli_fetch_array($result)){
            $row['prize_time'] = date('Y年m月d日 H:i:s',$row['prize_time']);
            echo "<tr><td>{$row['prize']}</td><td>{$row['name']}</td><td>{$row['prize_time']}</td><tr>";
            }
        ?>
            

        </tbody>
    </table>
    </div>
<?
if ($getprize != 1) {
?>
<script>

$(".back").click(function(){
    window.location.replace('index.php');
    
})


</script>


</body>
</html>
<? 
        }
    ?>  