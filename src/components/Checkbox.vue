<template>
  <div>
    <div class="checkbox-form">
      <div class="answers">
        <label
          :key="option"
          class="item"
        >
          <span>{{ option }}</span>
          <input
            :id="option"
            v-model="checked"
            type="checkbox"
            :value="option"
            @change="onChange"
          >
          <span class="checkmark" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: false,
      default: () => []
    },
    option: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      checked: []
    };
  },
  methods: {
    onChange() {
      this.$emit('input', this.checked);
      this.$emit('update:modelValue', this.checked);
    }
  }
};
</script>

<style scoped>
.checkbox-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  font-family: 'Montserrat Alternates';
  font-weight: 500;
}

.checkbox-form .answers {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
}

.checkbox-form label {

}

.checkbox-form .item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1em;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

.checkbox-form .item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border: 0.5px solid #7B7979;
  border-radius: 10px;
}

.checkbox-form .item:hover input ~ .checkmark {
  background-color: #949494;
}

.checkbox-form .item input:checked ~ .checkmark {
  background-color: #a9a9a9;
}

.checkbox-form .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-form .item input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-form .item .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>