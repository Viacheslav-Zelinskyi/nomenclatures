<?php

function getNomenclatures($connect){
    $firstTable = $connect->query("SELECT * FROM `nomenclatures_table_1` ");
    $secondTable = $connect->query("SELECT * FROM `nomenclatures_table_2` ");
    $thirdTable = $connect->query("SELECT * FROM `nomenclatures_table_3`");
    $testTable = $connect->query("SELECT * FROM `nomenclaturesTest` ");

    $emparray = array(
        "firstTable" => array(),
        "secondTable" => array(),
        "thirdTable" => array(),
        "testTable" => array()
    );

    while($row =mysqli_fetch_assoc($firstTable))
    {
        $emparray["firstTable"][] = $row;
    }
    while($row =mysqli_fetch_assoc($secondTable))
    {
        $emparray["secondTable"][] = $row;
    }
    while($row =mysqli_fetch_assoc($thirdTable))
    {
        $emparray["thirdTable"][] = $row;
    }
    while($row =mysqli_fetch_assoc($testTable))
    {
        $emparray["testTable"][] = $row;
    }

    echo json_encode($emparray);
}

?>