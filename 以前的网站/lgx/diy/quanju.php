<?php
$servername = "localhost";
$username = "krislee";
$password = "xIng520,.";
$dbname = "krislee";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接数据库失败: " . $conn->connect_error);
}
$conn->query("set names utf8");
?>