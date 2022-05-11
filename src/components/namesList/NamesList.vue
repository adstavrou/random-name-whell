<template>
  <main class="main-container">
    <section class="main-container__col">
      <ol id="listOfNames">
        <li v-for="name in state.names">{{name}}</li>

      </ol>
    </section>
    <section class="main-container__col">
      <div class="form-input__container">
        <input id="name" type="text" v-model="state.nameToAdd" class="form-input__text" placeholder="Enter a name">
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

<style src="./_namesList.scss"></style>