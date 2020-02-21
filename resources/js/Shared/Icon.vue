<template>
    <svg v-if="icon === 'town'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
      </svg>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "town"
        }
    }
}
</script>
