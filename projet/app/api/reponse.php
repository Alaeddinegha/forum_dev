<?php



$app->get('/api/rep/{id}',function($request, $response){
    require_once('dbconnect.php');
        $id=$request->getAttribute('id');
    
  $query = "SELECT * FROM `reponses` where id_ques=$id";
                $result = $mysqli->query($query);
                while($row=$result->fetch_assoc()){
                    $data[]=$row;

}
if (isset($data)){
    header('Content-type:application/json');
echo(json_encode($data));
};
return $response->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
            ->withHeader('Access-Control-Allow-Credentials', 'true')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
           
    });