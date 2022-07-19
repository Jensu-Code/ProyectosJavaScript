<?php
    $servidor="localhost";
    $usuario="root";
    $clave="";
    $baseDeDatos="formulario" ;
    $enlace= mysqli_connect($servidor,$usuario,$clave,$baseDeDatos);

    if(!$enlace){
        echo "Error en la conexion con el servidor";
    }
?>