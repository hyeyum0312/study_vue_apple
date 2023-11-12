import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            name: "kim",
            age: 20,
            like: 44,
            좋아요눌렀니: false,
            more: {},
        };
    },
    mutations: {
        setMore(state, data) {
            state.more = { data };
        },
        이름변경(state) {
            state.name = "park";
        },
        나이변경(state, payload) {
            state.age += payload;
        },
        좋아요변경(state) {
            if (state.좋아요눌렀니 === false) {
                state.좋아요눌렀니 = true;
                state.like++;
            } else {
                state.좋아요눌렀니 = false;
                state.like--;
            }
        },
    },
    actions: {
        getData(context) {
            axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
                console.log("a.data;", a.data);
                context.commit("setMore", a.data);
            });
        },
    },
});

export default store;
