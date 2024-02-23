<script setup lang="ts">

import { onMounted, ref } from 'vue'

let login = ref()
let password = ref()
let data

import ApiService from '/home/temirlan/vue/toptom-front-test-business/services/api.service.ts';

let accessToken: any;


const registerAcc = async (login: string, password: string) => {
  try {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include additional headers if needed (e.g., API keys, tokens)
      },
      body: JSON.stringify({
        username: login,
        password: password
      })
    });

    if (!response.ok) {
      // If the server response is not ok, throw an error with the status
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json(); // Assuming the server responds with JSON
    console.log(data);
    // Handle your data here. For example, if the server responds with an access token:
    // console.log(data.access_token);
  } catch (error) {
    console.error('Registration error:', error);
  }
};

const getData = async ()=>{
  try{
    const { data } = await useFetch('https://qqfnjewfbgdqnkqncqefberqlfjnjqefnqervnklqfewf.toptom.kz/favorites')
    console.log(data)
    return data
  }catch(error){
    throw error;
  }
};

onMounted(()=>{
  data = getData()
});


</script>

<template>
  <div class="wrapper">
    <div class="auth-form">
      <div class="auth-form--login">
        <label for="login">Логин</label>
        <form action="" id="login"><input type="email" v-model="login" /></form>
        <h1>{{login}}</h1>
      </div>
      <div class="auth-form--password">
        <label for="password">Пароль</label>
        <form action="" id="password"><input type="password" v-model="password"/></form>
        <h1>{{password}}</h1>
      </div>
      <button @click="registerAcc">Зарегистрироваться</button>
    </div>
  </div>
  <NuxtLink href="login">Войти</NuxtLink>
</template>

<style scoped lang="scss">
.wrapper {
  height: 90vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33vw;
  height: 33vh;
}

.auth-form--login {

}

.auth-form--password {
}
</style>