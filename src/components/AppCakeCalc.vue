<template>
  <div class="card">
    <h1>Калькулятор торта:</h1>
    <button class="btn" @click="addLayer">Добавить слой</button>
    <div class="calc-wrap" v-show="layers.length > 0">
      <div class="calc">
        <ul class="layers">
          <li
            class="layer"
            v-for="layer in layers"
            :key="layer"
            :class="'layer-' + layer.type"
            :style="{ height: layer.height * 10 + 'px' }"
            @click="++layer.height"
            @contextmenu.prevent="--layer.height"
          ></li>
        </ul>
        <div class="options">
          <table class="form-control">
            <tr>
              <th>Слой</th>
              <th>Высота</th>
              <th>Действие</th>

            </tr>
            <tr v-for="(layer, i) in layers" :key="layer">
              <td>
                <select v-model="layers[i].type">
                  <option v-for="(layer, key) in listLayers" :key="key" :value="key" >{{ layer.layerName }}</option>
                </select>
              </td>
              <td><input type="number" v-model="layer.height" /></td>
              <td><button class="btn" @click="removeLayer(i)">Удалить</button></td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
      <h2>Итого: {{res}} руб.</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layers: [],
      height: 4,
      listLayers: {
        fruit: {
          layerPrice: 120,
          layerName: 'Фруктовый'
        },
        biscuit: {
          layerPrice: 150,
          layerName: 'Бисквит'
        },
        irish: {
          layerPrice: 90,
          layerName: 'Ирландский'
        },
        chocolate: {
          layerPrice: 200,
          layerName: 'Шоколадный'
        }
      },
      defaultLayer: 'fruit',
      defaultHeight: 4
    }
  },
  methods: {
    addLayer () {
      this.layers.push({
        type: this.defaultLayer,
        height: this.defaultHeight
      })
    },
    removeLayer (i) {
      this.layers.splice(i, 1)
    }
  },
  computed: {
    res () {
      let sum = 0
      this.layers.forEach(item => {
        sum += this.listLayers[item.type].layerPrice * item.height
      })
      return sum
    }
  }
}
</script>

<style scoped>
.card {
  width: 800px;
}
.calc-wrap {
  width: 100%;
}
.calc {
  margin-top: 20px;
  display: flex;
}
.layers {
  margin-right: 50px;
  flex-basis: 50%;
  list-style: none;
  padding: 0;
}
.layer {
  /* width: 200px; */
}
.layer-fruit {
  background-color: crimson;
}
.layer-biscuit {
  background-color: bisque;
}
.layer-irish {
  background-color: lightgreen;
}
.layer-chocolate {
  background-color: chocolate;
}
</style>
