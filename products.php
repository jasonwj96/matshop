<?php
require_once('./database.php');
class Products
{
  private $_db;

  public function __construct()
  {
    $this->_db = new Database();
  }

  public function getProducts()
  {
    $command = "CALL sp_get_products";
    $pdo = $this->_db->getConnection();
    $stmt = $pdo->prepare($command);
    if ($stmt->execute()) {
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $results;
    } else {
      echo "Error al ejecutar el comando: " . $command;
    }
  }

  public function addProduct($newId, $newTitle, $newDesc, $newImageName, $newPrice, $newRating, $newCategory)
  {
    $command = "CALL sp_add_product('$newId', '$newTitle', '$newDesc', '$newImageName', '$newPrice', '$newRating','$newCategory')";
    $pdo = $this->_db->getConnection();
    $stmt = $pdo->prepare($command);
    if ($stmt->execute()) {
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $results;
    } else {
      echo "Error al ejecutar el comando: " . $command;
    }
  }

  public function getByCategory($category)
  {
    $command = "CALL sp_get_products_by_category('$category')";
    $pdo = $this->_db->getConnection();
    $stmt = $pdo->prepare($command);
    if ($stmt->execute()) {
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $results;
    } else {
      echo "Error al ejecutar el comando: " . $command;
    }
  }

  public function deleteProduct($product_id)
  {
    $command = "CALL sp_delete_product('$product_id')";
    $pdo = $this->_db->getConnection();
    $stmt = $pdo->prepare($command);
    if ($stmt->execute()) {
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $results;
    } else {
      echo "Error al ejecutar el comando: " . $command;
    }
  }
}
