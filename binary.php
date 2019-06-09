<?php

$arr = [10, 15, 21, 42, 53, 12, 32, 176];

$find = 12;

$found = false;

foreach ($arr as $key => $data) {
    if ($data == $find) {
        $found = true;
        echo "Data found at index : $key, data : $data";
    }
}

if (!$found) {
    echo "Data not found";
}