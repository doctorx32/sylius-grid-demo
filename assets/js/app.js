/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import Vue from "vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "../css/app.css";
import Create from "./create.vue";
import BootstrapVue from 'bootstrap-vue'

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

Vue.use(BootstrapVue);
new Vue({
    el: '#app',
    template: '<Create/>',
    components: {
        Create
    }
});