<?php
require_once('./products.php');
$category = json_decode(file_get_contents('php://input'));
$obj_products = new Products();

if ($category != null) {
  echo json_encode($obj_products->getByCategory($category));
}
