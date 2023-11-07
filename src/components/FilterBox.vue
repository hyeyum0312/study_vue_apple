<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div :class="`filter-item ${props.filterList}`" :style="`background-image:url(${props.imageUrl})`"></div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
    imageUrl: String,
    filterList: [],
});
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
