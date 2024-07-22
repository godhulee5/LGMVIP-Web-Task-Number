<?php
session_start();
include('db.php');

if (!isset($_SESSION['username'])) {
    header('Location: login.php');
    exit();
}

$query = "SELECT * FROM student_results";
$result = mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="portal.html">Portal</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <h1>Student Results</h1>
        <table>
            <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
            <?php while ($row = mysqli_fetch_assoc($result)) : ?>
            <tr>
                <td><?php echo $row['student_name']; ?></td>
                <td><?php echo $row['student_id']; ?></td>
                <td><?php echo $row['subject']; ?></td>
                <td><?php echo $row['marks']; ?></td>
            </tr>
            <?php endwhile; ?>
        </table>
    </main>

    <footer>
        <p>&copy; 2024 Student Management System</p>
    </footer>
</body>
</html>
