<template>
  <main class="main-container">
    <section class="main-container__col">
      <Wheel :list-of-names="state.names" :spin-the-wheel="state.spinTheWheel" @wheel-anim-stopped="weHaveAWinner"></Wheel>
    </section>
    <section class="main-container__col">
      <div class="form-input__container">
        <input id="name" type="text" v-model="state.nameToAdd" class="form-input__text" @keydown.enter="addName(state.nameToAdd)" placeholder="Enter a name">
        <label for="name" class="form-input__label">Enter a name</label>
        <span class="form-input__decoration-line"></span>
        <button id="addNameBtn" class="form-input__button--add" type="button" @click="addName(state.nameToAdd)">+</button>
      </div>
      <div>
        <button id="runTheWheel" class="form-input__button--run" type="button" @click="runTheWheel">Run The Wheel</button>
        <h2 id="winner">{{state.winner}}</h2>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { test } from "../../utils/helpers";
import { reactive } from 'vue';
import Wheel from '../wheel/Wheel.vue'

const state = reactive({
  names : [],
  winner : '',
  nameToAdd: '',
  spinTheWheel: false,
});

function addName(arg: string) {
  state.names.push(arg);
  state.nameToAdd = '';
}

function runTheWheel() {
  const index = Math.floor(Math.random() * state.names.length)
  state.spinTheWheel = true;
}

function weHaveAWinner(winner: Number) {
  state.spinTheWheel = false;
  state.winner = state.names[winner];
}

</script>

<style src="./_namesList.scss"></style>