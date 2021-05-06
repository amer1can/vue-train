/* eslint-disable vue/no-unused-components */
<template>
  <div class="wrap">
    <div class="container">
      <div class="card">
        <h2>Актуальные новости на {{ now }}</h2>
        <hr />
        <span>Открыто: {{ openRate }} | Прочитано: {{ readRate }}</span>
      </div>
      <AppNews
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :text="item.text"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @wnews-open="wopen"
        @was-read="wasRead"
        @was-unread="wasUnRead"
      />
    </div>

    <div class="container">
      <div class="card">
        <h2>Слоты</h2>
        <hr />
        <app-slots>
          <p>Главный текст для нашего нового слота</p>
          <template #header>
            <h3>Да-здравствует, заголовок!</h3>
          </template>
          <template #footer>
            <h4>А это наш футер</h4>
          </template>
        </app-slots>
      </div>
      <app-slots-list>
        <template #default="slotProps">
          <span style="color: red;">
            idx = {{ slotProps.idx + 1 }} & iter {{ slotProps.iter }}
          </span>
        </template>
      </app-slots-list>
    </div>

    <div class="container">
      <div class="card">
        <h2>Динамик/асинхрон компоненты</h2>
        <hr />
        <app-button
          :color="oneColor"
          @action="activeBtn = 'one'"
        >
          One
        </app-button>
        <app-button
          :color="twoColor"
          @action="activeBtn = 'two'"
        >
          Two
        </app-button>
      </div>
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>

    </div>
  </div>
</template>

<script>
import AppButton from './components/AppButton'
import AppNews from './components/AppNews'
import AppSlots from './components/AppSlots'
import AppSlotsList from './components/AppSlotsList'
import AppTextOne from './components/AppTextOne'
import AppTextTwo from './components/AppTextTwo'
export default {
  data () {
    return {
      activeBtn: 'one',
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Трамп победил на выборах в США',
          text:
            'Товарищи! рамки и место обучения кадров в значительной степени обуславливает создание модели развития. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также рамки и место обучения кадров позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий способствует подготовки и реализации форм развития.',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Путина назвали главным человеком 21 века',
          id: 2,
          text:
            'Равным образом начало повседневной работы по формированию позиции в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации модели развития. Равным образом реализация намеченных плановых заданий представляет собой интересный эксперимент проверки новых предложений. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.',
          isOpen: false,
          wasRead: false
        },
        {
          title: 'ЦСКА разгромил Ювентус в лиге чемпионов',
          text:
            'Разнообразный и богатый опыт рамки и место обучения кадров позволяет оценить значение направлений прогрессивного развития. Задача организации, в особенности же реализация намеченных плановых заданий в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач.',
          id: 3,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  provide () {
    return {
      title: 'Список доступных статей:',
      news: this.news
    }
  },
  mounted () {
    setTimeout(() => {
      this.componentName = 'my new component'
    }, 2000)
  },
  computed: {
    // componentName () {
    //   return 'app-text-' + this.activeBtn
    // },
    componentName: {
      // по-умолчанию все свойства геттеры
      get () {
        return 'app-text-' + this.activeBtn
      },
      // но можем управлять и сеттерами
      set (value) {
        console.log('component new name: ', value)
      }
    },
    oneColor () {
      return this.activeBtn === 'one' ? 'purple' : ''
    },
    twoColor () {
      return this.activeBtn === 'two' ? 'purple' : ''
    }
  },
  components: {
    AppNews,
    AppSlots,
    AppSlotsList,
    AppButton,
    AppTextOne,
    AppTextTwo
  },
  methods: {
    wopen (data) {
      this.openRate++
      // console.log(data)
    },
    wasRead (id) {
      const index = this.news.findIndex(item => item.id === id)
      this.news[index].wasRead = true
      this.readRate++
    },
    wasUnRead (id) {
      const item = this.news.find(n => n.id === id)
      item.wasRead = false
      this.readRate--
    }
  }
}
</script>
<style>
.wrap {
  display: flex;
}
.container {
  flex-basis: 33%;
}
</style>
