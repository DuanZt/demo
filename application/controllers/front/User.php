<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

    
	public function __construct()
	{
		parent::__construct();

		$this->load->model('user_model');
		//$this->load->helper('url');
		//$this->load->library('session');

    }
    
	public function index()
	{
		echo json_encode(['stateCode'=>'200','msg'=>generateToken(123)]);
    }

    public function auth($token){
		echo json_encode(['stateCode'=>'200','msg'=>authToken($token)]);
    }
  
}
