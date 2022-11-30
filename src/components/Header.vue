<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="conditional">
      <div class="login-button" v-if="!authenticated">
        <button @click="$router.push('login')">Войти</button>
      </div>
      <div class="profile-preview" v-if="authenticated">
        <div class="user-name">{{ user }}</div>
        <div class="user-image">img</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      authenticated: localStorage.getItem('access_token') ? true : false,
      user: fetch("http://localhost:5207/api/Auth/getme"),
    };
  },
  mounted() {
    console.log(fetch("http://localhost:5207/api/Auth/getme"))
  }
};

</script>

<style lang="scss">
.header-wrapper {
  height: 130px;
  width: auto;
  background: #F8F8F8;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0 150px 0 150px;
  align-items: center;

  .logo {
    height: 100px;
    width: 260px;
    background: #F8F8F8;
    box-shadow: 0px 5px 24px 5px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 60px;
    }
  }

  .login-button {
    button {
      color: white;
      font-family: 'Montserrat Alternates';
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      background-color: #F79110;
      border-radius: 10px;
      border: none;
      height: 44px;
      width: 128px;
      transition: 0.3s all ease-out;

      &:hover {
        background-color: #fc7f08;
      }
    }
  }

  .profile-preview {
    font-family: 'Montserrat Alternates';
    font-size: 18px;
    font-weight: 700;
    width: 360px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    background: #F8F8F8;
    box-shadow: 0px 5px 24px 5px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    
    .user-name {
      
    }
  }
}
</style>