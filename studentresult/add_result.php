<?php
session_start();
include('db.php');

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $student_name = $_POST['student_name'];
    $student_id = $_POST['student_id'];
    $subject = $_POST['subject'];
    $marks = $_POST['marks'];

    $query = "INSERT INTO student_results (student_name, student_id, subject, marks) VALUES ('$student_name', '$student_id', '$subject', '$marks')";
    if (mysqli_query($conn, $query)) {
        echo "Result added successfully.";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Student Result</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <main>
        <h1>Add Student Result</h1>
        <form method="post" action="add_result.php">
            <label for="student_name">Student Name:</label>
            <input type="text" id="student_name" name="student_name" required>
            <br>
            <label for="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required>
            <br>
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
            <br>
            <label for="marks">Marks:</label>
            <input type="number" id="marks" name="marks" required>
            <br>
            <button type="submit">Add Result</button>
        </form>
    </main>
</body>
</html>
