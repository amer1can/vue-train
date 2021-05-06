/*eslint-env es6*/
<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </app-button>
    <app-button v-if="wasRead" color="white" @action="unReadNews">Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <p>
        {{ text }}
      </p>
      <app-button v-if="!wasRead" color="red" @action="readNews">
        Прочесть новость
      </app-button>

      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
  // props: ['title'],
  // emits: ['wnews-open'], // необязательно, больше для других разработчиков

  props: {
    title: {
      type: String,
      required: true //  Параметр обязателен
    },
    id: Number, //  Proxy, Array, Promise
    text: String,
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        //  Для валидации входящих свойств, обязательно return true/false
        // console.log(value)
        return true
      }
    },
    wasRead: Boolean
  },
  emits: {
    // м.б. валидация метода, либо null
    'wnews-open' (a) {
      if (a) {
        return true
      } else {
        console.log('No data!')
        return false
      }
    },
    'was-read' (id) {
      if (id) return true
      else {
        console.warn('No ID')
      }
    },
    'was-unread': null
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
        const a = 'Hello1'
        this.$emit('wnews-open', a)
      }
    },
    readNews () {
      this.isNewsOpen = false
      this.$emit('was-read', this.id)
    },
    unReadNews () {
      this.$emit('was-unread', this.id)
    }
  },
  components: { AppButton, AppNewsList }
}
</script>
