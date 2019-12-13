<?php
require_once('./products.php');
$request = json_decode(file_get_contents('php://input'));
$obj_products = new Products();
var_dump($request);

if (
  $request->newId != null &&
  $request->newTitle != null &&
  $request->newDesc != null &&
  $request->newImageName != null &&
  $request->newPrice != null &&
  $request->newRating  != null &&
  $request->newCategory  != null
) {
  echo json_encode($obj_products->addProduct(
    $request->newId,
    $request->newTitle,
    $request->newDesc,
    $request->newImageName,
    $request->newPrice,
    $request->newRating,
    $request->newCategory
  ));
}
