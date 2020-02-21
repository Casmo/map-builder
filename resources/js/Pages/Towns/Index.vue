<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">Towns</h1>
    <div class="grid grid-cols-4 gap-4">
      <town v-for="town in towns" :key="town.id" :town="town" />
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import Town from '@/Pages/Towns/View';

export default {
  metaInfo: { title: 'Towns' },
  layout: Layout,
  components: {
      Town
  },
  props: {
      towns: Array
  }
}
</script>