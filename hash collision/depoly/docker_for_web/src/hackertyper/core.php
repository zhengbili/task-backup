<?php
error_reporting(0);
include('flag.php');
if(!isset($_POST['data1']) || !isset($_POST['data2']) || $_POST['data1']===$_POST['data2'])
{
	show_source(__FILE__);
}
elseif( md5($_POST['data1'])==sha1($_POST['data2']) )
{
	die($flag1);
}
elseif( crc32($_POST['data1'])===crc32($_POST['data2']) )
{
	die($flag2);
}
elseif( md5($_POST['data1'])===md5($_POST['data2']) )
{
	die($flag3);
}
elseif( sha1($_POST['data1'])===sha1($_POST['data2']) )
{
	die($flag4);
}
?>