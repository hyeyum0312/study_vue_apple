<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="step === 1" @click="step++">Next</li>
            <li v-if="step === 2" @click="publish">발행</li>
        </ul>
        <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :listData="list" @addData="addData" :step="step" :fileInfo="fileInfo" />

    <!-- <button @click="more">더보기</button>

    <h4>안녕{{ $store.state.name }}</h4>
    <button @click="$store.commit('이름변경')">버튼</button>

    <p>{{ $store.state.age }}</p>
    <button @click="$store.commit('나이변경', 10)">버튼</button>

    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button> -->

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" multiple type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import axios from "axios";
import Container from "./components/Container.vue";
import listData from "./listData";

const list = ref([...listData]);
// const moreCount = ref(0);
const step = ref(3);
const fileInfo = ref("");
const content = ref("");

// function more() {
//     const url = `https://codingapple1.github.io/vue/more${moreCount.value}.json`;
//     axios.get(url).then(function (res) {
//         const response = res.data;
//         list.value.push(response);
//         moreCount.value++;
//     });
// }

function upload(e) {
    let file = e.target.files;
    console.log("file", file);
    step.value++;

    fileInfo.value = URL.createObjectURL(file[0]);
}

function publish() {
    step.value = 0;
    let addItem = {
        name: "나야나222",
        userImage: fileInfo.value,
        postImage: fileInfo.value,
        likes: 1000,
        date: "May 15",
        liked: false,
        content: content.value,
        filter: "perpetua",
    };
    list.value.unshift(addItem);
}

function addData(data) {
    console.log("content", content);
    content.value = data.value;
}

onMounted(() => {
    // this.emitter.on("filter", (a) => {
    //     console.log("a", a);
    // });
});
</script>

<style>
@import "style.css";

body {
    margin: 0;
}
ul {
    padding: 5px;
    list-style-type: none;
}
.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}
.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}
.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;
}
#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
