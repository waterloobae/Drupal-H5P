# CKEditor WIRIS (MathType/ChemType)

This module integrates WIRIS Editor into CKEditor. WIRIS is the leading
equation editor for web-based platforms. It adds ability to insert math
and chemistry equations — using MathType and ChemType — into your CKEditor.

WIRIS Editor generates the equation using [MathML](https://en.wikipedia.org/wiki/MathML),
but it doesn't handle
the rendering. In order to view the formula in your content, you must
use a rendering solution such as [MathJax](https://www.drupal.org/project/mathjax).

For a full description of the module, visit the
[project page](https://www.drupal.org/project/ckeditor_wiris).

Submit bug reports and feature suggestions, or track changes in the
[issue queue](https://www.drupal.org/project/issues/ckeditor_wiris).


## Table of contents

- Requirements
- Installation
- Configuration
- Developer information
- Maintainers


## Requirements

This module requires CKEditor from core.


## Installation

Install as you would normally install a contributed Drupal module. For further
information, see
[Installing Drupal Modules](https://www.drupal.org/docs/extending-drupal/installing-drupal-modules).


## Configuration

Go to **Text formats and editors** (`admin/config/content/formats`),
then add the MathType and/or ChemType into your editor.

## Developer Information

Since Drupal.org has no packaging logic yet for the `/build` directory it's important to build
and commit your changes.

```bash
npm install
npm run build
```

When updating the CkEditor plugin iself (in `/js/cleditor5_plugins/MathType`), you need to make some edits to the
source code.

E.g.

```
// commands.js
import Command from '@ckeditor/ckeditor5-core/src/command'; --> import {Command} from 'ckeditor5/src/core';
// plugin.js
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'; --> import { Plugin } from 'ckeditor5/src/core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'; -->
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver'; --> import { ButtonView } from 'ckeditor5/src/ui';
import ClickObserver from '@ckeditor/ckeditor5-engine/src/view/observer/clickobserver'; --> import { ClickObserver } from 'ckeditor5/src/engine';
```

Thanks to: https://www.drupal.org/project/ckeditor5_dev/issues/3334524


## Maintainers

- Bram Driesen - [BramDriesen](https://www.drupal.org/u/BramDriesen)
- Thiago Régis - [tregismoreira](https://www.drupal.org/u/tregismoreira)
- Pierre Abrey - [pierre@edumobi.com.br](https://www.drupal.org/u/pierreedumobicombr)
- Ricardo Schneider - [rarps](https://www.drupal.org/u/rarps)

This project has been sponsored by:
- **Somos Educação**. is Brazil’s largest basic education company and one of the largest educational
  groups in the world. SOMOS, in Portuguese, stands for “we are”, in English.
