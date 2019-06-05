<?php

$arr = [1,3,4,5,6,1,2,10,1];
sort($arr);
print_r($arr);

if (count($arr) % 2 == 0) {
    $idx = count($arr) / 2;
    $idx1 = $idx - 1;

    $total = $arr[$idx] + $idx1;

    echo $total / 2;
} else {
    $idx = floor(count($arr) / 2);

    echo $arr[$idx];
}