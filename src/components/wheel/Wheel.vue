<template>
  <div class="wheel__container">
    <ul id="listOfNames" class="wheel" :class="`${spinTheWheel ? 'wheel--spin' : ''}`">
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
import {onBeforeUpdate, onUpdated, reactive, ref, watch} from 'vue';
import { test } from "../../utils/helpers";

const props = defineProps({
  listOfNames : Array,
  spinTheWheel : Boolean
});

const state = reactive({
  deg : 0,
  zLength : 0
});

const emit = defineEmits([
    'wheelAnimStopped'
    ]
);

function animStopped() {
  emit('wheelAnimStopped');
}


onBeforeUpdate(() => {
  state.deg = 360 / props.listOfNames.length;
  state.zLength = 6 * props.listOfNames.length;

});

onUpdated(() => {

  const $wheel = document.querySelector('#listOfNames');

  Promise.all(
      $wheel.getAnimations().map(
          function(animation) {
            return animation.finished
          }
      )
  ).then(
      function() {
        animStopped();
      }
  );

})

</script>

<style src="./_wheel.scss"></style>
