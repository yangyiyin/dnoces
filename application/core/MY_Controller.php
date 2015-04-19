<?php
/**
 * Created by yyy.
 * User: yyy
 * Date: 15-4-1
 * Time: 下午10:35
 */

/**
 * 自动模板调用
 *
 * @param $module
 * @param $template
 * @param $istag
 * @return unknown_type
 */
class MY_Controller extends CI_Controller{
    protected function view($view_file,$page_data=false,$cache=false)
    {
        $modules = $this->getModules();
        $view_file=template($modules,$view_file);
        $view_file = str_replace('application/views/','',$view_file);

        $this->load->view($view_file,$page_data);
    }
    /*
     * 获得当前模块
     * */
    protected function getModules(){
        return $this->uri->segment(1);
    }

}
