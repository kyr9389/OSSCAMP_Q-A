/* eslint-disable */
import * as board from "./types";
import axios from "axios";

export default {

    async [board.LOAD_ITEMS_UNSOLVED]({commit}, payload) {
        let result = await axios.get("./mockup/unsolvedData.json");
        commit(board.UPDATE_ITEMS_UNSOLVED, result.data.items);
    },

    async [board.LOAD_ITEMS_SOLVED]({commit}, payload) {
        let result = await axios.get("./mockup/solvedData.json");
        commit(board.UPDATE_ITEMS_SOLVED, result.data.items);
    },

    async [board.LOAD_ITEMS_POPULAR]({commit}, payload) {
        let result = await axios.get("./mockup/popularData.json");
        commit(board.UPDATE_ITEMS_POPULAR, result.data.items);
    },

    async [board.LOAD_ITEMS_SEARCHED]({commit}, payload) {
        let result = await axios.get("./mockup/searchDummy.json");
        commit(board.UPDATE_ITEMS_SEARCHED, result.data.items);
    },

    [board.LOAD_SHOW]({commit}, payload) {
        commit(board.UPDATE_SHOW);
    }
}