<?php
session_start();

//pokemon register的验证码 
if ( isset($_GET['poker_sjh']) && isset($_GET['r']) ){
    if (strlen($_GET['poker_sjh']) == 11 && $_GET['r'] == 1 ) {
        $_SESSION['poker_sjh'] = $_GET['poker_sjh'];
        require '../../diy/quanju.php';
        $exist_flag = 0;
        //寻找管理员
        $sql = "SELECT sjh,yzm_shijian,pwd FROM pokemon WHERE `sjh` = {$_GET['poker_sjh']}";
        $result = $conn->query($sql);
        if($result && $row = mysqli_fetch_array($result)){
            if($row['pwd'] == null && $row['sjh'] == $_GET['poker_sjh']){
                $time = time();
                $t = ($row['yzm_shijian'] + 180) - $time;
                if ($t > 0) {
                    exit('-3');  //3分钟内多次点击，强制退出
                }
                // 获得随机验证码，并且更新到数据库
                $yzm = rand(100000,999999);
                $sql = "UPDATE `pokemon` SET `yzm` = '{$yzm}',`yzm_shijian` = '{$time}' WHERE `sjh` = '{$_GET['poker_sjh']}';";
                $result = $conn->query($sql);
                    if($result){
                    
                    }else{
                        exit('-5');
                    }
            }else {
                if($row['pwd'] != null && $row['sjh'] == $_GET['poker_sjh']){
                    exit('-2');    //手机号已注册
                }
            }
        }else {
            $time = time();
            $t = ($row['yzm_shijian'] + 180) - $time;
            if ($t > 0) {
                exit('-3');  //3分钟内多次点击，强制退出
            }
            // 获得随机验证码，并且更新到数据库
            $yzm = rand(100000,999999);
            $sql = "INSERT INTO `pokemon` (`yzm`,`yzm_shijian`,`sjh`) VALUES ('{$yzm}','{$time}','{$_GET['poker_sjh']}');";
            $result = $conn->query($sql);
            if($result){

            }else{
                exit('-4');
            }
        }
        

        
    }else{
        exit('-1'); //手机号格式不对
    }
   
    
}

if (isset($_GET['getYzmTime']) && $_GET['getYzmTime'] == '1') {
    
    if(isset($_SESSION['poker_sjh'])){
        //计算剩余时间，并将时间返回给前端
        $time = time();
        require '../../diy/quanju.php';
        $sql = "SELECT yzm_shijian FROM pokemon WHERE `sjh` = {$_SESSION['poker_sjh']}";
        $result = $conn->query($sql);
        if($result && $row = mysqli_fetch_array($result)){
            
            if (isset($row['yzm_shijian'])) {
                $t = ($row['yzm_shijian'] + 180) - $time;
                if ($t > 0) {
                    exit($t.'');
                }else{
                    exit('-2');
                }
            }
        }else{
            exit('-1');
        }  
    }
    exit('-3');
}






/**
 * Created by PhpStorm.
 * Date: 2017-9-5
 * Time: 10:15
 * @功能概要：短信API接口调用DEMO
 * @公司名称： ShenZhen Montnets Technology CO.,LTD.
 */
////////////////////////////////////////////////////////////////////////////////////
//公共参数(帐号,密码,url地址)
require_once('lib/SmsSendConn.php');
//南方短信节点url地址
$url = 'http://api01.monyun.cn:7901/sms/v2/std/';
//北方短信节点url地址
//$url = 'http://api02.monyun.cn:7901/sms/v2/std/';
$smsSendConn = new SmsSendConn($url);
$data=array();
//设置账号(必填)
$data['userid']='E1032S'; 
//设置密码（必填.填写明文密码,如:1234567890）
$data['pwd']='3Kw17K';
///////////////////////////////////////////////////////////////////////////////////

/*
* 单条发送 接口调用
*/
// 设置手机号码 此处只能设置一个手机号码(必填)
$data['mobile']=$_GET['poker_sjh'];
//设置发送短信内容(必填)
$data['content']="您的验证码是{$yzm}，在3分钟内有效。如非本人操作请忽略本短信。";
// 业务类型(可选)
$data['svrtype']='';
// 设置扩展号(可选)
$data['exno']='';
//用户自定义流水编号(可选)
$data['custid']='';
// 自定义扩展数据(可选)
$data['exdata']='';
try {
    $result = $smsSendConn->singleSend($data);
    if ($result['result'] === 0) {
        exit('1');
    } else {
        exit($result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}


/*
 * 相同内容群发 接口调用
 */
/*

// 设置手机号码 每个手机号之间用,隔开(必填)
$data['mobile']='13243757111,13243757112';
//设置发送短信内容(必填)
$data['content']='验证码：6666，打死都不要告诉别人哦！';
// 业务类型(可选)
$data['svrtype']='';
// 设置扩展号(可选)
$data['exno']='';
//用户自定义流水编号(可选)
$data['custid']='';
// 自定义扩展数据(可选)
$data['exdata']='';
try {
    $result = $smsSendConn->batchSend($data);

    if ($result['result'] === 0) {
        print_r("相同内容信息发送成功！");
    } else {
        print_r("相同内容信息发送失败，错误码：" . $result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}

*/

/*
 * 个性化群发 接口调用
 */
/*


//multimt包结构集合(必填)
$data['multimt']=array(
    array(
        'mobile'=>'13243757111',
        'content'=>'验证码：6666，打死都不要告诉别人哦！',
        'svrtype'=>'',
        'exno'=>'',
        'custid'=>'',
        'exdata'=>''
    ),
    array(
        'mobile'=>'13243757112',
        'content'=>'验证码：8888，打死都不要告诉别人哦！',
        'svrtype'=>'',
        'exno'=>'',
        'custid'=>'',
        'exdata'=>''
    )
);
try {
    $result = $smsSendConn->multiSend($data);
    if ($result['result'] === 0) {
        print_r("个性化内容信息发送成功！");
    } else {
        print_r("个性化内容信息发送失败，错误码：" . $result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}

*/


/*
 * 查询剩余金额或条数 接口调用
 */
/*

try {
    $result = $smsSendConn->getBalance($data);
    if ($result['result'] === 0) {
        if ($result['chargetype'] === 0) {
            print_r("查询成功，当前计费模式为条数计费,剩余条数为：" . $result['balance']);
        } else if ($result['chargetype'] === 1) {
            print_r("查询成功，当前计费模式为金额计费,剩余金额为：" . $result['money']."元");
        } else {
            print_r("未知的计费类型");
        }
    } else {
        print_r("查询余额失败，错误码：" . $result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}

*/


/*
 * 获取上行 接口调用
 */
/*

// 设置一次获取上行的最大条数
$data['retsize']=100;
try {
    $result = $smsSendConn->getMo($data);
    if($result['result']===0)
    {
        foreach($result['mos'] as $k=>$v)
        {
           $result['mos'][$k]['content']=urldecode($v['content']);//将内容进行utf-8解码
        }
        print_r("获取上行成功");
        print_r($result['mos']);
    }
    else
    {
        print_r("获取上行失败，错误码：" .$result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}

*/


/*
 * 获取状态报告 接口调用
 */
/*

// 设置一次获取状态报告的最大条数
$data['retsize']=100;
try {
    $result = $smsSendConn->getRpt($data);//获取状态报告
    if($result['result']===0)
    {
        print_r("获取状态报告成功");
        print_r($result['rpts']);//输出状态报告信息
    }
    else
    {
        print_r("获取状态报告失败，错误码：" .$result['result']);
    }
}catch (Exception $e) {
    print_r($e->getMessage());//输出捕获的异常消息，请根据实际情况，添加异常处理代码
    return false;
}

*/
?>