<?php
require_once('./login.php');
$request = json_decode(file_get_contents('php://input'));
$obj_login = new Login();
echo json_encode($obj_login->verifyEmail($request->email));
