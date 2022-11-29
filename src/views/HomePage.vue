<template>
  <div class="main-page-wrapper">
    <Header />
    <div class="first-block">
      <div class="back-illustration">
        <img src="../assets/Vector1.svg" alt="">
      </div>


      <div class="label">
        Что тебя ждет в <br>
        <div class="yellow">U Summer School</div>?


        <div class="description">
          <p>Участие в U Summer School - это возможность погрузиться в одно из направлений сферы информационной
            безопасности. В течение месяца студенты решают рабочие задачи, учатся у экспертов, развиваются.</p>
        </div>

        <div class="continue">

          <a href="#second-block"><button>Вперед!</button></a>

        </div>
      </div>
    </div>

    <div class="second-block" id="second-block">

    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "MainPage",
  components: {
    Header
  }
};
</script>

<style lang="scss">

.main-page-wrapper {

  .first-block {
    height: 835px;
    width: 100%;
    position: relative;

    .back-illustration {
      position: absolute;

      top: 190px;
      right: 0;

      img {
        height: 960px;
      }
    }

    .label {
      position: absolute;
      left: 150px;
      top: 190px;
      font-family: 'Montserrat Alternates';
      color: black;
      font-size: 72px;
      font-weight: 900;

      .yellow {
        color: #F79110;
        display: inline-block;
      }

      .continue{
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;

        button{
          cursor: pointer;
          width: 190px;
          color: white;
          background: #F79110;
          border: none;
          border-radius: 10px;
          height: 50px;
          font-family: 'Montserrat Alternates';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
        }
      }

      .description {
        width: 380px;

        p {
          font-weight: 500;
          line-height: 160%;
          font-size: 18px;
          text-align: left;

        }
      }
    }
  }

  .second-block {
    position: relative;
    width: 100%;
    height: 800px;
    background: white;
  }
}

</style>