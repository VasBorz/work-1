<?php 
$data = array();

$name = $_POST['name'];
$file = $_POST['file'];
$url = $_POST['url'];
$massege = $_POST['massege'];

if ($name == '' || $massege == '' || $url == '' || $file == '') {
	$data['status'] = 'Заполниете пожалуйста Ваши данные';
	$data['mess'] = 'error';
} else{
	$data['status'] = 'Ура - все получилось!';
	$data['mess'] = 'OK';
}


header('Content-Type: application/json');
echo json_encode($data);
exit();


 ?>