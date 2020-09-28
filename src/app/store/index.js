import Vue from 'vue';
import Vuex from 'vuex';
import klineMoudule from './kline'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        klineMoudule
    }
});