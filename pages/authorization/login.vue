<script setup lang="ts">
  import ApiService from '/home/temirlan/vue/toptom-front-test-business/services/api.service.ts';
  import { ref } from 'vue';
  let login = ref()
  let password = ref()
  let accessToken: any;

  const loginIntoAcc = async (login: string, password: string) => {
    try {
      const response = await ApiService.login({"username":login,"password": password});
      accessToken = response.headers.access_token;
      console.log(response)
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }

  }

</script>

<template>
  <div class="wrapper">
    <div class="auth-form">
      <form action="">
        <div class="auth-form--login">
          <label for="login">Логин</label>
          <input type="text" v-model="login" placeholder="login" id="login"/>
        </div>
        <div class="auth-form--password">
          <label for="password">Пароль</label>
          <input type="text" placeholder="password" v-model="password" id="password"/>
        </div>
      </form>
      <button @click="loginIntoAcc">Войти</button>
    </div>
  </div>
  <NuxtLink href="registration" >Регистариция</NuxtLink>
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
    display: flex;
    flex-direction: column;

  }

  .auth-form--password {
    display: flex;
    flex-direction: column;
  }
  form{
    display: flex;
    flex-direction: column;
  }
</style>