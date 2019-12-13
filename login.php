<?php
require_once('./database.php');

class Login
{

  private $_db;

  public function __construct()
  {
    $this->_db = new Database();
  }


  public function verifyEmail($email)
  {
    $command = "CALL sp_verify_email('$email')";
    $pdo = $this->_db->getConnection();
    $stmt = $pdo->prepare($command);
    if ($stmt->execute()) {
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
      return $results;
    } else {
      echo "Error al ejecutar el comando: " . $command;
    }
  }

  public function loginUser($email, $password)
  {
    $command = "CALL sp_login_user('$email','$password')";
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
