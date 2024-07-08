<script setup></script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.wrapper {
  margin: 2rem;
  background: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -3px;
  border-radius: 1rem;
  overflow: hidden;
}
</style>
