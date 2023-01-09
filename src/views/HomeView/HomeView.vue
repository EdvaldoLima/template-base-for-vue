<template>
  <div class="home">Base Template</div>
</template>

<script>
import defaultApi from '@/api/default';
export default {
  name: 'HomeView',
  mounted() {
    defaultApi.search();
  },
};
</script>
