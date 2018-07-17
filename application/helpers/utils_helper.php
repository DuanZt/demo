<?php

defined('BASEPATH') OR exit('No direct script access allowed');

function outputJSON($stateCode,$results=''){
  return json_encode(
    [
      'stateCode'=>$stateCode,
      'results'=>$results
    ]
  );
}

?>