<template>
  <div class="container">
    <div class="card">
      <h2>Актуальные новости на {{ now }}</h2>
      <span>Открыто: {{ openRate }}</span>
    </div>
    <hr />
    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @wnews-open="wopen"
    />
  </div>
</template>

<script>
// import { openBlock } from "@vue/runtime-core";
import AppNews from './components/AppNews'
export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      news: [
        {
          title: 'Трамп победил на выборах в США',
          id: 1,
          isOpen: false
        },
        {
          title: 'Путина назвали главным человеком 21 века',
          id: 2,
          isOpen: false
        },
        {
          title: 'ЦСКА разгромил Ювентус в лиге чемпионов',
          id: 3,
          isOpen: false
        }
      ]
    }
  },
  components: {
    AppNews
  },
  methods: {
    wopen () {
      this.openRate++
    }
  }
}
</script>
