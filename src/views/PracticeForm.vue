<template>
  <div class="form-page">
    <Header />
    <div class="application-form-wrapper" id="application">
      <div class="application-form">
        <div class="form-title">
          <h3>Заполните анкету</h3>
        </div>
        <div class="form-inputs">
          <div class="text-input-wrapper">
            <TextInput placeholder="ФИО" v-model="application.firstName" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Контактный телефон" v-model="application.phone" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Электронная почта" v-model="application.email" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Наименование учебного заведения" v-model="application.universityName" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Факультет" v-model="application.universityFaculty" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Специальность" v-model="application.universitySpeciality" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Курс" v-model="application.universityCourseNumber"/>
          </div>
          <p>В &nbsp;
            <Dropdown :options="['УЦСБ', 'АБВГ']" /> &nbsp; вы бы хотели пройти
          </p>
          <div class="checkboxes">
            <Checkbox option="Практику" />
            <Checkbox option="Стажировку" />
          </div>

          <div class="text-input-wrapper">
            <TextInput placeholder="Время начала стажировки / практики" v-model="application.usscTargetDates" />
          </div>

          <div class="send-form">
            <button @click="sendForm">Отправить</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TextInput from "@/components/TextInputWhite";
import Dropdown from "@/components/Dropdown";
import Checkbox from "@/components/Checkbox";
import Footer from "@/components/Footer";

export default {
  name: "PracticeForm",
  components: {
    Header,
    TextInput,
    Dropdown,
    Checkbox,
    Footer
  },
  data () {
    return {
      application: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        universityName: '',
        universityFaculty: '',
        universitySpeciality: '',
        universityCourseNumber: 0,
        usscTargetDates: '',
      }
    }
  },
  methods: {
    sendForm: async function (){

      let options = {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify(this.application)
      }
      let register = await fetch("http://localhost:5207/api/Auth/register", options);
      let response = await register.json();
      return response;
    }
  },
};
</script>

<style lang="scss">

.form-page {
  background: #E9E9E9;
  display: flex;
  flex-direction: column;

  .send-form{
    margin-top: 20px;
    button {
      background: #F79110;
      box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.17);
      border-radius: 10px;
      border: none;
      width: 200px;
      height: 50px;

      cursor: pointer;
      font-family: 'Montserrat Alternates';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: white;
    }
  }

  .checkboxes {
    margin-top: 15px;
    width: 100px;
    display: flex;
  }

  .application-form-wrapper {
    margin: 25px auto 0 auto;
    width: 60%;
    padding-bottom: 70px;
    background: white;
    height: calc(100vh - 100px);
    border-radius: 32px;
    align-self: center;

    .application-form {
      margin-left: 100px;

      display: flex;
      flex-direction: column;

      .form-title {
        align-self: start;
        font-family: 'Montserrat Alternates';
        color: black;

        h3 {
          font-size: 32px;
        }
      }

      .form-inputs {
        width: 100%;
        display: flex;
        justify-content: start;
        flex-direction: column;

        p {

          display: flex;
          align-items: center;
          justify-content: start;
          font-family: 'Montserrat Alternates';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
        }

        .text-input-wrapper {

          margin-top: 30px;
          width: calc(100% - 102px);
        }
      }
    }


  }
}

</style>