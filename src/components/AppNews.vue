<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">Открыть</button>
    <p v-if="isNewsOpen">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam illo obcaecati illum ea dolores provident sit voluptate vitae molestias! Voluptatum, consequuntur. Repudiandae eos autem non officia neque culpa ut.</p>
  </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: true //  Параметр обязателен
    },
    id: Number, //  Proxy, Array, Promise
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        //  Для валидации входящих свойств, обязательно return true/false
        console.log(value)
        return true
      }
    }
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('wnews-open')
      }
    }
  }
}
</script>
