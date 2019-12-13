<?php
require_once('./login.php');
$request = json_decode(file_get_contents('php://input'));
$obj_login = new Login();

if (
  $request->userId != null &&
  $request->firstName != null &&
  $request->lastName != null &&
  $request->email != null &&
  $request->address != null &&
  $request->password  != null
) {
  echo json_encode($obj_login->registerUser(
    $request->userId,
    $request->firstName,
    $request->lastName,
    $request->email,
    $request->address,
    $request->password
  ));
}
