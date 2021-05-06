<template>
  <div>
    <slot name="header"></slot>
    <!-- name="default" не обязательный -->
    <slot name="default">Этот текст появляется, потому что ничего не передали из родителя</slot>
    <!-- $slots хранит все переданные slots, проверка ниже уберет и тег div из ДОМ, если слот футера не будет передан -->
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
