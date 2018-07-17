<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */


	public function upload(){

        $config['upload_path']      = FCPATH.'files';
        $config['allowed_types']    = 'gif|png|jpg|jpeg|xlsx';
        $config['encrypt_name'] = TRUE;
        $config['max_size']     = 51200;

        $this->load->library('upload', $config);

        $files = array();

        if(count($_FILES)){
            foreach ($_FILES as $key => $value) {
                if (!$this->upload->do_upload($key))
                {
                 //   die(json_encode(array("error"=>"File size is not more  than 5MB and it only supports png,jpg,gif,jpeg format!")));

                  die(outputJSON(200,$this->upload->display_errors()));
                  
                
                }else{
                    $file_data = $this->upload->data();
                    $files[] = $file_data['file_name'];
                }
            }
        }

        echo outputJSON(200,$files);
	}
	
	public function index()
	{
		
    echo outputJSON(200,'Welcome to my world!');
		
  }
  
  public function error(){
    
    echo outputJSON(200,'Sorry , page not find!');
  }
}
