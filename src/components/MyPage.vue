<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="padding: 10px">
        <h4>팔로워</h4>
        <input placeholder="?" @change="searchEvent" />
        <div class="post-header" v-for="(item, i) in follower" :key="i">
            <div class="profile" :style="`background-image: url(${item.image}) `"></div>
            <span class="profile-name">{{ item.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const follower = ref([]);
const followerOriginal = ref([]);
import { useStore } from "vuex";
let store = useStore();
console.log("store.state.name", store.state.name);

function searchEvent(event) {
    let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(event.target.value) != -1;
    });
    follower.value = [...newFollower];
}

onMounted(() => {
    axios.get("follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
        console.log("follower", follower);
    });
});
</script>

<style></style>
