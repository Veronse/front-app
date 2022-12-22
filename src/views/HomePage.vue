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

          <a v-if="!authenticated" href="/application"><button>Вперед!</button></a>

        </div>
      </div>
    </div>

    <div class="second-block" id="second-block">
      <div class="select-blocks">
        <div class="block-item" v-for="card of cards">
          <h2>{{ card.title }}</h2>
          <a href=""><img src="../assets/arrow.svg" alt=""></a>
        </div>

        <div class="block-item">
          <h2>Технический<br> департамент,<br> направление систем<br> безопасности</h2>
          <a href=""><img src="../assets/arrow.svg" alt=""></a>
        </div>

        <div class="block-item">
          <h2>Технический<br> департамент2,<br> направление систем<br> безопасности</h2>
          <a href=""><img src="../assets/arrow.svg" alt=""></a>
        </div>

        <div class="block-item">
          <h2>Технический<br> департамент3,<br> направление систем<br> безопасности</h2>
          <a href=""><img src="../assets/arrow.svg" alt=""></a>
        </div>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer.vue";

export default {
  name: "MainPage",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      authenticated: false,
      cards: []
    }
  },
  async mounted() {
    let cards = await fetch('http://localhost:5261/api/Faculty');

    let cardsObjects = await cards.json();

    console.log(cardsObjects);

    if(cardsObjects.length) {
      this.cards = cardsObjects;
    }
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
    height: auto;
    background: white;
    min-height: 400px;

    .select-blocks{
      display: flex;
      width: 80%;
      margin: 0px auto 0 auto;
      padding-top: 70px;
      grid-gap: 50px;
      flex-wrap: wrap;
      justify-content: center;

      .block-item{
        position: relative;
        display: flex;
        width: 360px;
        height: 220px;
        background: #F5F5F5;
        box-shadow: 8px 7px 10px rgba(0, 0, 0, 0.06);
        border-radius: 32px;
        img{
          opacity: 0;
          transition: all 0.2s ease-out;
          position: absolute;
          width: 50%;
          bottom: 0;
          right: 0;
        }

        &:hover img{
          position: absolute;
          opacity: 1;
          width: 50%;
          bottom: 0;
          right: 0;
        }

        h2{
          margin: 35px 0 0 35px;
          width: 100%;
          font-family: 'Montserrat Alternates';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          text-align: left;
        }
      }
    }
  }
}

</style>