<script setup lang="ts">
const { basics } = usePortfolioContent()

useHead({ title: () => basics.value.label })
</script>

<template>
  <div class="w-full flex-1">
    <Presentations />
  </div>
</template>