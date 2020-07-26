<?

$file_name="mark.md";
$file_dir = "";

if (!file_exists($file_dir.$file_name)) { //检查文件是否存在 
    echo "文件找不到";
    exit;
} else {
    $file=fopen($file_dir.$file_name,"r");// 输入文件标签
    Header("Content-type: application/octet-stream");
    Header("Accept-Ranges: bytes");
    Header("Accept-Length: ".filesize($file_dir . $file_name));
    Header("Content-Disposition: attachment; filename=" . $file_name);
    // 输出文件内容
    echo fread($file,filesize($file_dir . $file_name));
    fclose($file);
    exit;
} 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>


    <script>
        // window.location.href="1.txt" ;
    </script>
</body>
</html>