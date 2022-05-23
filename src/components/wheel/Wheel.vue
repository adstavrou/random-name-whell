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
  zLength : 0,
  winner : -1
});

const emit = defineEmits([
    'wheelAnimStopped'
    ]
);

const $root = document.querySelector(':root');

function spinSetup() {
  state.winner = Math.floor(Math.random() * props.listOfNames.length);
  $root.style.setProperty('--whell-spin-to-degrees' , `${- (3600 + state.winner * (360 / props.listOfNames.length))}deg`);
}

function spinStopped() {
  $root.style.setProperty('--whell-spin-from-degrees' , `${- (state.winner * (360 / props.listOfNames.length))}deg`);
  emit('wheelAnimStopped', state.winner);
}

function waitAnimToStop() {
  const $wheel = document.querySelector('#listOfNames');
  Promise.all(
      $wheel.getAnimations().map(
          function(animation) {
            return animation.finished
          }
      )
  ).then(
      function() {
        spinStopped();
      }
  );
}


onBeforeUpdate(() => {
  state.deg = 360 / props.listOfNames.length;
  state.zLength = 6 * props.listOfNames.length;
  props.spinTheWheel && spinSetup();

});

onUpdated(() => {
  props.spinTheWheel && waitAnimToStop();
})

</script>

<style src="./_wheel.scss"></style>
