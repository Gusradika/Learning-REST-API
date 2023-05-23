<?php

//ENCODE


// $mhs = [
//     [
//         "nama" => "Aditya Kesuma",
//         "nim" => "21410100039",
//         "email" => "aditezo24@gmail.com",
//     ],
//     [
//         "nama" => "Aditya Kesuma2",
//         "nim" => "21410100040",
//         "email" => "2141000039@dinamika.ac.id"
//     ]
// ];

$conn = mysqli_connect('localhost', 'root', '', 'utsaps');

if ($conn->connect_error) {
    die("connection FAILED : " . $conn->connect_error);
}


$result = mysqli_query($conn, 'SELECT * FROM customers');

// $row = mysqli_fetch_assoc($result);


while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

// $db = $dbh->prepare('SELECT * FROM customers');
// $customer = $db->fetchAll(PDO::FETCH_ASSOC);

// var_dump($rows);
// die();

$mhs = json_encode($rows);

echo $mhs;
