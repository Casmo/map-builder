<template>
  <div>
    <h1 class="mb-8 font-bold text-3xl">Towns</h1>
      <input class="p-4 full-width block border" type="text" v-model="form.search" />
    <div class="grid grid-cols-4 gap-4">
      <town v-for="town in towns" :key="town.id" :town="town" />
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout'
import Town from '@/Pages/Towns/View';
import {throttle, pickBy} from 'lodash';

export default {
  metaInfo: { title: 'Towns' },
  layout: Layout,
  components: {
      Town
  },
  props: {
      towns: Array,
      filters: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search
      }
    }
  },
  watch: {
      form: {
          handler: throttle(function() {
              let query = pickBy(this.form);
              this.$inertia.replace(this.route('towns.index', Object.keys(query).length ? query : { remember: 'forget' }));
          }, 150),
          deep: true,
      },
  },
}
</script>