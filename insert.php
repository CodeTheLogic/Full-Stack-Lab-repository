<?php
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $roll = $_POST['rollno'];
    $user = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $zip = $_POST['zip'];
    $pass = $_POST['password'];

    $sql = "INSERT INTO students (RollNo, FirstName, Email, Phone, ZipCode, Password) 
            VALUES ('$roll', '$user', '$email', '$phone', '$zip', '$pass')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Data Saved Successfully!'); window.location.href='view.php';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
