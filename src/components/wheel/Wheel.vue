<template>
  <div class="wheel__container">
    <ul id="listOfNames" class="wheel">
      <li
          v-for="(name, key) in listOfNames"
          class="wheel__item" 
          :class="`wheel__item--${key}`"
          :style="{transform: `rotateX(${state.deg * key}deg) translateZ(${state.zLength}px)`}"
      >
        {{name}}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUpdate, reactive, ref, watch} from 'vue';
import { test } from "../../utils/helpers";

const props = defineProps({
  listOfNames : Array
});

const state = reactive({
  deg : 0,
  zLength : 0,
  nameToAdd: ''
});


onBeforeUpdate(() => {
  state.deg = 360 / props.listOfNames.length;
  state.zLength = 6 * props.listOfNames.length
  test(props.listOfNames.length)
});


</script>

<style src="./_wheel.scss"></style>