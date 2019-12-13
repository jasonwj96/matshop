<?php
require_once('./products.php');
$request = json_decode(file_get_contents('php://input'));
$obj_products = new Products();

if ($request != null) {
  echo json_encode($obj_products->deleteProduct($request));
}
