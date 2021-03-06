Breeze PHP Bundle for TextMate
==============================

This is the official TextMate bundle for the [Breeze micro-framework](http://www.breezephp.com/) for PHP 5.3+.

License
-------

This bundle is subject to the new BSD license.  For full copyright and license information, please see the LICENSE file that is distributed with this bundle.

Install
-------

The easiest way to install this bundle is via command line.

### Install with Git

``` sh
mkdir -p ~/Library/Application\ Support/TextMate/Bundles
cd ~/Library/Application\ Support/TextMate/Bundles
git clone git://github.com/whatthejeff/php-breeze.tmbundle.git 'PHP Breeze.tmbundle'
osascript -e 'tell app "TextMate" to reload bundles'
```

### Install without Git:

``` sh
mkdir -p ~/Library/Application\ Support/TextMate/Bundles
cd ~/Library/Application\ Support/TextMate/Bundles
curl -L http://github.com/whatthejeff/php-breeze.tmbundle/tarball/master -o php-breeze.tmbundle.tar.gz
tar zxf php-breeze.tmbundle.tar.gz
rm php-breeze.tmbundle.tar.gz
mv whatthejeff-php-breeze.tmbundle* 'PHP Breeze.tmbundle'
osascript -e 'tell app "TextMate" to reload bundles'
```
