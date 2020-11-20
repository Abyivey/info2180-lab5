<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$mys = 'is ruled by';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country = filter_input(INPUT_GET, "country", FILTER_SANITIZE_STRING);

$coun = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$results = $coun->fetchAll(PDO::FETCH_ASSOC);
echo $country;



?>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
