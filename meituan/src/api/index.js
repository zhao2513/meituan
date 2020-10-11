import axios from 'axios'

export default {
    getIcon() {
        return axios.get("/static/mock/index.json");
    },
    getMinSuCity() {
        return axios.get("/static/mock/minsuCity.json")
    },
    getMinsuCityList(id) {
        return axios.get(`/static/mock/cityId/${id}.json`)
    },
    getRecommend() {
        return axios.get('/static/mock/recommends.json');
    },
    getCommonList() {
        return axios.get("/static/mock/goodList.json");
    },
    getListRight() {
        return axios.get("/static/mock/listRight.json");
    },
    getLogin(params) {
        return axios.get("http://api.duyiedu.com/api/meituan/login", params)
    },
    getRegister(params) {
        return axios.get("http://api.duyiedu.com/api/meituan/register", params)
    },
    getSearchList(searchVal) {
        return axios.get(`/api/ptapi/suggest?keyword=${searchVal}`);
    }
}