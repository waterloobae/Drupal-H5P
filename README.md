# Drupal-H5P
This repository is for experiment on H5P on Drupal to accomodate math problems and expressions.

[MathType and H5P](https://help.h5p.com/hc/en-us/articles/7541975419165-MathType-and-H5P)

[Using Latex with H5P and MathJax](https://h5p.org/mathematical-expressions)

1. H5P and H5P Editor modules are installed along with CKEditor5 Wiris(MathType/ChemType)
2. Under structure, H5P Library of H5P-math-display needs to be uploaded.
3. Codes below is added to sites/default/settings.php for MathJax
`
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
`

For inLineMath and displayMath, $ and $$ are included but they do not work yet. It works with M