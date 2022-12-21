<template>
  <div class="login-page">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>

    <div class="login-inputs-wrapper">
      <div class="login-inputs">
        <div class="box-label">
          <h2>Войти</h2>
        </div>
        <div class="text-fields">
          <div class="email">
            <TextInput v-model="email" placeholder="E-mail" />
          </div>
          <div class="password">
            <p>Забыли пароль?</p>
            <TextInput v-model="password" placeholder="Пароль" type="password" />
          </div>
        </div>
        <div class="buttons">
          <div class="login-button">
            <button @click="login">Войти</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import TextInput from "@/components/TextInput";

export default {
  name: "LoginPage",
  components: {
    TextInput
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    async login(){
      let result = await fetch('http://localhost:5200/api/Auth/Login',
        {
        method: 'POST',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          ReturnUrl: 'http://asdasd.ru'
        }),
          headers: {
          'Content-Type': 'application/json'
          }
      });

      console.log(result);
    }
  }
};

</script>

<style lang="scss">
.login-page {
  height: 100vh;
  background-image: url("../assets/login-people.svg");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 50%;
  margin-top: 60px;
  position: relative;

  .logo {
    margin-left: 150px;
    display: flex;

    img {
      height: 87px;
    }
  }

  .login-inputs-wrapper {
    position: absolute;
    right: 150px;
    top: 150px;
    width: 450px;
    height: 430px;
    background: #F8F8F8;
    box-shadow: 0px 10px 48px -15px rgba(0, 0, 0, 0.25);
    border-radius: 32px;

    .login-inputs {
      display: flex;
      flex-direction: column;
      margin: 50px 68px 0 68px;

      .box-label {
        display: flex;
        justify-content: start;

        h2 {
          font-family: 'Montserrat Alternates';
          font-size: 40px;
          font-weight: 700;
        }
      }

      .text-fields {
        margin-top: 60px;

        .password{
          margin-top: 30px;
          display: flex;
          flex-direction: column;

          p{
            cursor: pointer;
            font-family: 'Roboto';
            color: rgba(0, 0, 0, 0.5);
            text-decoration: underline;
            align-self: flex-end;
            margin: 0 0 5px 0;
            font-size: 15px;
          }
        }
      }

      .login-button{
        margin-top: 30px;
        display: flex;

        button {
            color: white;
            font-family: 'Montserrat Alternates';
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
            background-color: #F7A845;
            border-radius: 10px;
            border: none;
            height: 44px;
            width: 128px;
            transition: 0.3s all ease-out;

          &:hover{
            background-color: #fc7f08;
          }
        }
      }
    }


  }
}
</style>