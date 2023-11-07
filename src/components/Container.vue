<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="props.step === 0">
        <Post :listData="props.listData" />
    </div>

    <div v-if="props.step === 1">
        <div class="upload-image" :style="`background-image: url(${props.fileInfo})`"></div>
        <div class="filters">
            <div class="filters-1"></div>
            <div class="filters-1"></div>
            <div class="filters-1"></div>
            <div class="filters-1"></div>
            <div class="filters-1"></div>
        </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="props.step === 2">
        <div class="upload-image" :style="`background-image: url(${props.fileInfo})`"></div>
        <div class="write">
            <textarea class="write-box" v-model="contents">write!</textarea>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import Post from "./Post.vue";
const contents = ref("");
const props = defineProps({
    listData: {
        type: Object, // 객체 형식의 prop을 명시
    },
    step: null,
    fileInfo: String,
});

const emit = defineEmits(["addData"]);
emit("addData", contents);
</script>

<style>
.upload-image {
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size: cover;
}
.filters {
    overflow-x: scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>
