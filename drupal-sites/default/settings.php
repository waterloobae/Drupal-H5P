<?php
$databases['default']['default'] = array (
  'database' => 'drupal',
  'username' => 'drupal',
  'password' => 'password',
  'prefix' => '',
  'host' => 'drupal-mysql',
  'port' => '3306',
  'isolation_level' => 'READ COMMITTED',
  'driver' => 'mysql',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);
$settings['hash_salt'] = 'gXlzsUvwBBuUxbQCLrXmYwY64MxSYQVUQ74TG-GnPDm9kiTTlRWTJOSvvh61-6ERMXUxr-2QXA';
$settings['config_sync_directory'] = 'sites/default/files/config_mhRtZiGOdg9jhd03cPRz18qaGoJoCU5wGQe5PDeqCq9FJZzZpHP66kdE5C7XcMY46WZCuBOZiA/sync';

$config['h5p.settings']['h5p_library_config'] = array(
  'H5P.MathDisplay' => array(
    "observers" => array(
      array("name" => "mutationObserver", "params" => array("cooldown" => 500)),
      array("name" => "domChangedListener"),
      array("name" => "interval", "params" => array("time" => 1000))
    ),
    "renderer" => array(
      "mathjax" => array(
        "src" => "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js",
        "config" => array(
          "extensions" => array("tex2jax.js"),
          "jax" => array("input/TeX", "output/HTML-CSS"),
          "tex2jax" => array(
            // Important, otherwise MathJax will be rendered inside CKEditor
            "ignoreClass" => "ckeditor",
            "inlineMath" => array(array("$", "$"), array("\\(", "\\)")),
            "displayMath" => array(array("$$", "$$"), array("\\[", "\\]"))
          ),
          "messageStyle" => "none"
        )
      )
    )
  )
);