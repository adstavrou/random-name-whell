<template>
  <ol>
    <li v-for="name in state.names">{{name}}</li>

  </ol>
  <div>
    <label for="name">Enter a name</label>
    <input id="name" type="text" v-model="state.nameToAdd">
    <button type="button" @click="addName(state.nameToAdd)">Add</button>
  </div>
  <div>
    <button type="button" @click="runTheWheel">Run The Wheel</button>
    <h2>{{state.winner}}</h2>
  </div>

</template>

<script setup lang="ts">
import { test } from "../utils/helpers";
import { reactive } from 'vue';

const state = reactive({
  names : [],
  winner : '',
  nameToAdd: ''
});

function addName(arg) {
  state.names.push(arg);
  test('test', state.names);
  state.nameToAdd = '';
  test('test2', state.nameToAdd);
}

function runTheWheel() {
  const index = Math.floor(Math.random() * state.names.length)

  state.winner = state.names[index];
}

</script>

<style scoped>

</style>