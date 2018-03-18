<?php
// post nouvelle questions dans la base de donnée
$app->post('/api/ajoutq', function ($request){ 
 
 require_once('dbconnect.php');
 $query = "INSERT INTO `questions`(`titre_ques`, `text_ques`, `id_uti`) VALUES(?,?,?)";
 $stmt = $mysqli->prepare($query);
 $stmt->bind_param("sss", $a, $b, $c);
    $a= $request->getParsedBody()['titre_ques'];
    $b= $request->getParsedBody()['text_ques'];
    $c= $request->getParsedBody()['id_uti'];
$stmt->execute();

  });










 