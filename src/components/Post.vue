<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="post" v-for="(item, i) in props.listData" :key="i">
        <div class="post-header">
            <div class="profile" :style="{ backgroundImage: `url(${item.userImage})` }"></div>
            <span class="profile-name"></span>
        </div>
        <div @click="$store.commit('좋아요변경', $store.state.like)" class="post-body" :style="{ backgroundImage: `url(${item.postImage})` }"></div>
        <div class="post-content">
            <p>{{ $store.state.like }}Likes</p>
            <p>
                <strong>{{ item.name }}</strong> {{ item.content }}
            </p>
            <p class="date">{{ item.date }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    listData: {
        type: Object, // 객체 형식의 prop을 명시
    },
});
</script>

<style>
.post {
    width: 100%;
}
.profile {
    /* background-image: url("https://picsum.photos/100?random=0"); */
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}
.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}
.post-header {
    height: 30px;
    padding: 10px;
}
.post-body {
    /* background-image: url("https://picsum.photos/600?random=0"); */
    height: 450px;
    background-position: center;
    background-size: cover;
}
.post-content {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
}
.date {
    font-size: 11px;
    color: grey;
    margin-top: -8px;
}
</style>
