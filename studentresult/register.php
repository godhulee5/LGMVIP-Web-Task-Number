<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if (mysqli_query($conn, $query)) {
        header("Location: register_success.php");
        exit();
    } else {
        $error_message = "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}
?>
