<template>
  <div id="app">
    <LuffyHeader />
    <router-view/>
  </div>
</template>

<script>

import LuffyHeader from '@/components/Common/LuffyHeader';

export default {
  name: 'App',
  components:{
    LuffyHeader,
  }
}
</script>

<style scoped>

</style>
