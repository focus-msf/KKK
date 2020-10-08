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
    // 一个es6的语法 叫destructure
    getKlines ( { commit }, timeArray) {
        console.log(timeArray);
        timeArray[0] = timeArray[0].toLocaleDateString()
        timeArray[1] = timeArray[1].toLocaleDateString()
        axios.get('http://localhost:8081/index', {
            params: {
                q:timeArray
            }
        }).then((response) => {
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




// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });