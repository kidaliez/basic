<?php

$val = 10;

$arr = [29,23,53,15,25,55,61,52,51,10,2,1,5,13,22,61];

$data_found = false;

foreach ($arr as $key => $data) {
    if ($data == $val) {
        $data_found = true;
        echo "Data found at index : $key with value : $data";
    }
}

if (!$data_found) {
    echo "Data not found";
}