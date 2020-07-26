<?
    echo '<h1>欢迎来到我的世界。</h1>';
    echo '  <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>11</td>
                <td>22</td>
                <td>33</td>
            </tr>
            </table>
            ';
?>
    
<?
    $student = array(
        array(1,'张三',true,60.5),
        array(2,'李四',true,70.5),
        array(3,'刘五',false,80.5)
    );
    echo $student[0][1];
    echo gettype($student);
    foreach ($student as $key => $value) {
        foreach ($value as $key2 => $value2) {
            echo $value2;
        }
    }
    $a = 'abc';
    function abc(&$b) {
        $b = '123';
    }
    abc($a);
    echo $a;

    $str = array('你好 ','我很好','你呢');
    $str[0] = urlencode($str[0]);
    $str[1] = urlencode($str[1]);
    $str[2] = urlencode($str[2]);
    $str = json_encode($str);
    echo urldecode($str) ;
    $str1 = ['red','blue','green'];
    echo $str1[0];
    $array = [
        "foo" => "bar",
        "bar" => "foo",
    ];
    echo $array['foo'];


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
</head>
<body>
    <br>
    <label for="vv1">姓名<input type="text" id="v1" name="vv1"></label>
    <label for="vv2">年龄<input type="text" id="v2" name="vv2"></label>
    <button>获取数据</button>
    <div id="text"></div>
    <script>
        $("button").click(function () {
            // $("#text").load('text.php',{
            //     v1:$("#v1").val(),
            //     v2:$("#v2").val(),
            // },function(res,status){
            //     console.log(res);
            //     console.log(status);
            // });
                // $.post('text.php',{
                //     "v1":$("#v1").val(),
                //     "v2":$("#v2").val(),
                // },function(data){
                //     console.log(data);
                //     // var str1 = data.name;
                //     // var str2 = data.age;
                //     // $("#text").html(str1 + str2)
                // },"json");

                $.getJSON("text.json",function(res){
                    console.log(res[0].name);
                    $.each(res, function (i,val) { 
                         console.log(i,val.name);
                    });
                }); 
                $.ajax({
                    type: "get",
                    url: "text.php",
                    data:{
                    "v1":$("#v1").val(),
                    "v2":$("#v2").val(),
                },
                    dataType: "json",
                    success: function (res) {
                        console.log(res.name);
                    }
                });
        })
    </script>
</body>
</html>