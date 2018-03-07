require('./bootstrap');
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment';
import Vue from 'vue';
//var VueLightbox = require('./plugins/simplelightbox/simple-lightbox.js');
//Vue.component('lightbox', VueLightbox);

//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);

Vue.component('home', require('./components/home/home.component.vue')); //include component

Vue.prototype.$http = axios.create();
Vue.prototype.getPath = function (url) {
    return `${url}`;//make path usage -- this.getPath('/url')
}

Vue.mixin({
    methods: {
       //mixin methods
    }
});

const app = new Vue({
    el: '#app',
    methods: {
       //functions
    },
    mounted: function () {
       //set start methods
    }
});