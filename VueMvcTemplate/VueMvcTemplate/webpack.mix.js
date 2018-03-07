const mix = require('laravel-mix');

mix.js('Scripts/src/app.js', 'js/app.js')
    .sass('Content/Styles/sass/app.scss', 'css/app.css')
    .setPublicPath('Assets');