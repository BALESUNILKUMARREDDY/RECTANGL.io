<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['user_id']) && isset($_POST['text']) && isset($_POST['category'])) {
    $userId = $_POST['user_id'];
    $text = $_POST['text'];
    $time = $_POST['time'];
    $category = $_POST['category'];
    $date = $_POST['date'];

    $sql = "INSERT INTO tasks (user_id, text, time, category, date) VALUES (?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$userId, $text, $time, $category, $date]);

    echo "Task Added!";
}

if (isset($_GET['user_id'])) {
    $userId = $_GET['user_id'];
    $stmt = $pdo->prepare("SELECT * FROM tasks WHERE user_id = ? ORDER BY date DESC");
    $stmt->execute([$userId]);
    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($tasks);
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['task_id'])) {
    $taskId = $_GET['task_id'];
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    $stmt->execute([$taskId]);
    echo "Task Deleted!";
}
?>
