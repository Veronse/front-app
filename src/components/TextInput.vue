<template>
  <div class="text-input">
    <textarea @change="changed" :value="modelValue" name="input" placeholder="." :style="{'height': height + 'px'}" v-if="height > 30"></textarea>
    <input @change="changed" :value="modelValue" name="input" placeholder="." :type="type" :style="{'height': height}" v-if="height  <= 30">
    <label for="input">{{placeholder}}</label>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  methods: {
    changed: function (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  props: {
    placeholder: '',
    type: '',
    height: {
      default: 30
    },
    modelValue: String,
  }
}
</script>

<style lang="scss">
.text-input{
  position: relative;
  width: 100%;


  textarea{
    background: transparent;
    outline: none;
    height: 30px;
    width: 100%;
    text-indent: 4%;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    resize: vertical;
    max-height: 200px;

    font-family: 'Montserrat Alternates';


    &::placeholder {
      color: white;
    }

    &:focus + label, &:not(:placeholder-shown) + label {
      transform: translate(-10px, -27px) scale(100%);
      font-size: 14px;
    }
  }

  input {
    background: #D9D9D9;
    outline: none;
    height: 30px;
    width: 100%;
    text-indent: 6%;
    border: none;
    border-radius: 10px;

    font-family: 'Montserrat Alternates';
    font-size: 15px;

    &::placeholder {
      color: #D9D9D9;
    }

    &:focus + label, &:not(:placeholder-shown) + label {
      transform: translate(-10px, -27px) scale(100%);
      font-size: 14px;
    }
  }
  label {
    font-family: 'Montserrat Alternates';
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    top: 5px;
    left: 20px;
    transition: all 0.2s ease-in;
    font-size: 15px;
  }
}
</style>