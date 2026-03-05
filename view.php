<?php include 'db_config.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>
    <link rel="stylesheet" href="style.css">
    <style>
        table { width: 100%; border-collapse: collapse; margin-top: 20px; background: white; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: center; }
        th { background-color: #2c3e50; color: white; }
    </style>
</head>
<body>
<div class="container" style="width: 90%; max-width: 800px;">
    <h2>Database Records</h2>
    
    <form method="GET" style="margin-bottom: 20px;">
        <input type="text" name="search" placeholder="Search by Roll No" style="width: 60%;">
        <button type="submit">Search</button>
    </form>

    <table>
        <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
        <?php
        $search = isset($_GET['search']) ? $_GET['search'] : '';
        $query = "SELECT * FROM students";
        if($search != '') { 
            $query .= " WHERE RollNo = '$search'"; 
        }
        
        $result = mysqli_query($conn, $query);
        while($row = mysqli_fetch_assoc($result)) {
            echo "<tr>
                <td>{$row['RollNo']}</td>
                <td>{$row['FirstName']}</td>
                <td>{$row['Email']}</td>
                <td>{$row['Phone']}</td>
                <td><a href='delete.php?id={$row['RollNo']}' style='color:red; font-weight:bold;'>Delete</a></td>
            </tr>";
        }
        ?>
    </table>
    <br><button onclick="window.location.href='index.html'">Add New Student</button>
</div>
</body>
</html>
