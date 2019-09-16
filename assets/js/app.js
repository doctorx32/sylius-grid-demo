/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import Vue from "vue";
import "../css/app.css";
import Create from "./create.vue";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

new Vue({
    el: '#app',
    template: '<Create/>',
    components: {
        Create
    }
});