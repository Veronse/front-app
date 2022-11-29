<template>
  <div class="footer-wrapper">
    <div class="navigations">
      <div class="sections">
      <a href="/about-us">О нас</a>
      <a href="/about-us">Направления</a>
      <a href="/about-us">Новости</a>
      <a href="/about-us">Вакансии</a>
      <a href="/about-us">Приведи друга</a>
      </div>

      <div class="links">
        <a href="#"><img src="../assets/vk-icon.svg" alt=""></a>
      </div>
    </div>
    <hr>
    <div class="copyright">
      <div class="copyright-label">
        <p>© 2022 ООО «УЦСБ». Все права защищены.</p>
      </div>

      <div class="links">
        <a href="#application">
          <button>Отправить резюме</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style lang="scss">
  .footer-wrapper{
    display: flex;
    flex-direction: column;
    height: 200px;
    border-radius: 32px 32px 0 0;
    background: #7B7979;
    width: 60%;
    margin: 50px auto 0 auto;

    hr{
      width: 100%;
      border: 1px solid #C9C9C9;
      border-top: none;
    }

    .copyright{
      margin: 0 auto 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80%;

      p{
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 500;
        color: #C9C9C9;
      }

      .links{
        button{
          cursor: pointer;
          width: 190px;
          height: 50px;
          background-color: #F79110;
          border-radius: 10px;
          color: white;
          font-family: 'Montserrat Alternates';
          border: none;
        }
      }
    }

    .navigations{
      a {
        text-decoration: none;
        color: #F8F8F8;
        font-family: 'Montserrat Alternates';
        font-size: 20px;
      }
      .sections{
        display: flex;
        justify-content: space-between;
        width: 80%;
      }

      .links {
        display: flex;
        align-items: center;
        cursor: pointer;

        a {
          display: flex;
          align-items: center;
        }
      }

      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-gap: 40px;
      margin: 35px auto 25px auto;
      width: 80%;
    }
  }
</style>