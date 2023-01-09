<template>
  <div id="app">
    <component :is="setLayout" />
  </div>
</template>
<script>
import SimpleLayout from '@/layouts/SimpleLayout/SimpleLayout.vue';

export default {
  name: 'AppContainer',
  computed: {
    setLayout() {
      return this.$route.meta.layout || SimpleLayout;
    },
  },
};
</script>
