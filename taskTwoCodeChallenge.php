<?php

/*
When I first read throught this problem, I noticed it's similarity immediately to the fairly well know 'fizzBuz' challenge. The problem can be solved in linear time using an iterative approach. The problem could be solved recursively, but would not be as time efficient.
*/

  function multiples($value) {
    $result = 0;
    for($i = 0; $i < $value; $i++) {
      if($i % 3 == 0 || $i % 5 == 0) {
        $result += $i;
      }
    }
    echo $result;
  }
  multiples(1000);

?>
