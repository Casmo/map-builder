<template>
  <div class="h-screen flex">
    <div class="w-16 sm:w-1/3 md:w-1/4 w-lg:1/5 xl:w-1/6 gradient-deep-space p-4">
      <inertia-link class="flex items-center text-pink-500 hover:text-pink-300" :href="route('towns.index')">
        <icon class="mr-2" icon="town" />
        <span class="hidden sm:inline-block">Towns</span>
      </inertia-link>
    </div>
    <div class="sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6">
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from "@/Shared/Icon";
export default {
  components: {
    Icon
  }
}
</script>
