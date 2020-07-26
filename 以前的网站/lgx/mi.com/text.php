<?
  $name = ( !empty($_REQUEST['v1'])) ? $_REQUEST['v1'] : '' ;
  $age = ( !empty($_REQUEST['v2'])) ? $_REQUEST['v2'] : '' ;
  // $str = array(
  //   "name"=>$name,
  //   "age"=>$age);
  $str['name'] = $name;
  $str['age'] = $age;
  // exit ('-3');
  $str = json_encode($str);
  echo $str;
  exit;
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
  <div>sdasd</div>
</body>
</html>