<?php

$nome = $_POST["nome"];
$escol = $_POST["escolaridade"];
$sexo = $_POST["sexo"];
echo "Nome: ".$nome. "br";


switch ($sexo){
     case 'M':
        echo "Sexo: Masculino<br>";break;

    case 'F':
        echo "Sexo: Feminino<br>";break;

     case 'O':
         echo "Sexo: O <br>";break;
     default: 
     echo "Você não escolheu um sexo <br>";break;
}
    echo "escolaridade: ".$escol. "<br>";
    echo  "hobbies: ";
    $cont = 1;
    foreach($_POST['hob'] as $value){
 //echo $cont++ " - ".$value."<br>";
    }







?>