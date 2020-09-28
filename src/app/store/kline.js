import axios from 'axios';

const state = {
    klines: []
}

const mutations = {
    UPDATE_KLINES (state, payload) {
        state.klines = payload;
    }
}


const actions = {
    getKlines ( { commit }) {
        axios.get('some/url').then((response) => {
            commit('UPDATE_KLINES', response.data)
        });
    }
}

const getters = {
    klines: state => state.klines
}


const klineMoudule = {
    state,
    mutations,
    actions,
    getters
}

export default klineMoudule;
