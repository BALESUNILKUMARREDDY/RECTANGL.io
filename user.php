<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['username']) && isset($_POST['email'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $profileImage = $_POST['profile_image'];

    $sql = "INSERT INTO users (username, email, profile_image) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$username, $email, $profileImage]);

    echo "User Registered!";
}

if (isset($_GET['user_id'])) {
    $userId = $_GET['user_id'];
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($user);
}
?>
