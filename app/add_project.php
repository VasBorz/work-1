<?php 
$data = array();

$data['mess'] = 'OK';


header('Content-Type: application/json');
echo json_encode($data);
exit();


 ?>