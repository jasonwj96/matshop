<?php
require_once("./products.php");
$products_obj = new Products();
echo json_encode($products_obj->getProducts(), JSON_PRETTY_PRINT);
