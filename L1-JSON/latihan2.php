
<?php

//DECODE

$data = file_get_contents('data/mhs.json');
$mhs = json_decode($data, true);
var_dump($mhs[0]['dosen wali']);



?>