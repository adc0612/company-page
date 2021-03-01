import {
    router
}
from '../../router/index.js';
import { state } from "./state";

const getters = {
    getCountryList(state) {
        return state.countryList;
    },
    getWeekList(state) {
        return state.weekList;
    },
    getSelectedCountry(state) {
        return state.selectedCountry;
    },
    getSelectedCountryImg(state) {
        return state.selectedCountry.img;
    },
    getActiveWeek(state) {
        return state.activeWeek;
    },
    defaultCountrySet(state){
        state.selectedCountry = state.countryList[0];
    },
    defaultWeekSet(state) {
        state.selectedWeek = state.weekList[0];
    },
    getMenuStatus(state){
        return state.menuStatus;
    },
    getstartAQList(state){
        return state.startAQList;
    },
    getbQCQList(state){
        return state.bQCQList;
    },
    getDQEQList(state){
        return state.dQEQList;
    },
    getCrossMediaList(state){
        return state.crossMediaList;
    },
    getFTPBtnList(state) {
        return state.fTPBtns;
    },
    getDebugBtnList(state) {
        return state.debugBtns;
    },
    getExtratorList(state) {
        return state.extractorBtn;
    },
    getStorageURLStatus(state){
        return state.storageURLStatus;
    }
};

const mutations = {
    changeCountryFunc(state, payload) {
        state.selectedCountry = payload.country;
        state.menuStatus = !state.menuStatus;
    },
    changeWeekFunc(state, payload) {
        state.activeWeek = payload;
        router.push({
            path: state.activeWeek.addr
        });
        // router.push('/week1');
        // state.selectedWeek = payload.week;
    },
    changeMenuStatus(state){
        state.menuStatus = !state.menuStatus;
    },
    backToMenu(){
        router.push({
            path: '/'
        });
    },
    changeStorageURLStatus(state) {
        state.storageURLStatus = !state.storageURLStatus;
    },
};

export default {
    state,
    getters,
    mutations
};