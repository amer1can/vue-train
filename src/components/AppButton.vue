<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
      validator (value) {
        return ['', 'white', 'red', 'purple'].includes(value)
      }
    }
  }

}
</script>

<style>

</style>
