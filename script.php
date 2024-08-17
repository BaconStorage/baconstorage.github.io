<?php
$dir = '/Scripts';
$files = scandir($dir);
echo json_encode($files);
?>
