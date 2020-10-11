import Vue from 'vue'
import vuex from 'vuex';
Vue.use(vuex)

//默认历史记录
let defaultKeyword = '[]';
if (localStorage.historyKeyword) {
    defaultKeyword = localStorage.historyKeyword;
}
console.log(typeof defaultKeyword);
let state = {
    localPosistion: '广州',
    userName: '',
    historyKeyword: defaultKeyword
};
let mutations = {
    changeUser(state, username) {
        state.userName = username
    },
    changeHistory(state, data) {
        if (!data) {
            state.historyKeyword = '[]';
            localStorage.historyKeyword = '';
        }

        let arr = JSON.parse(state.historyKeyword);
        console.log(arr);
        arr.push(data);

        state.historyKeyword = JSON.stringify(arr);
        localStorage.historyKeyword = JSON.stringify(arr);
        console.log(arr);
    }
}
export default new vuex.Store({
    state,
    mutations
})