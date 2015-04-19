<?php
/**
 * Created by yyy.
 * User: yyy
 * Date: 15-4-1
 * Time: 下午10:32
 */
if ( ! function_exists('template'))
{
    /**
     * 模板调用
     *
     * @param $module
     * @param $template
     * @param $istag
     * @return unknown_type
     */
    function template($module = 'expatree', $template = 'index', $style = 'expatree',$return_full_path=true) {

        global $CI;
        if(!isset($CI))$CI =& get_instance();
        if(!$style) $style = 'default';
        $CI->load->library('template_cache','template_cache');
        $template_cache = $CI->template_cache;
        //编译模板生成地址

       $compiledtplfile = $template_cache->cache_path.DIRECTORY_SEPARATOR_MY.'caches_template'.DIRECTORY_SEPARATOR_MY.$style.DIRECTORY_SEPARATOR_MY.$module.DIRECTORY_SEPARATOR_MY.$template.TPL_EXT;
        //视图文件
       $tplfile= APPPATH.'views'.DIRECTORY_SEPARATOR_MY.$module.DIRECTORY_SEPARATOR_MY.$template.TPL_EXT;

        if(file_exists($tplfile)) {

            if(!file_exists($compiledtplfile) || (@filemtime($tplfile) > @filemtime($compiledtplfile))) {
                $template_cache->template_compile($module, $template, $style);
            }
        } else {

            //如果没有就调取默认风格模板
            $compiledtplfile = $template_cache->cache_path.DIRECTORY_SEPARATOR_MY.'caches_template'.DIRECTORY_SEPARATOR_MY.'default'.DIRECTORY_SEPARATOR_MY.$module.DIRECTORY_SEPARATOR_MY.$template.TPL_EXT;
            if(!file_exists($compiledtplfile) || (file_exists($tplfile) && filemtime($tplfile) > filemtime($compiledtplfile))) {
                $template_cache->template_compile($module, $template, 'default');
            } elseif (!file_exists($tplfile)) {
                show_error($tplfile ,  500 ,  'Template does not exist(0)');
            }
        }

        if($return_full_path){

            return $compiledtplfile;
        }

        else
            return 'caches_template'.DIRECTORY_SEPARATOR_MY.$style.DIRECTORY_SEPARATOR_MY.$module.DIRECTORY_SEPARATOR_MY.$template;
    }
}