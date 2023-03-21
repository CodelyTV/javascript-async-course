<script setup>
const props = defineProps(['cb'])

let timeout

function handleSearch() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    props.cb()
  }, 5000)
}
</script>

<template>
  <div>
    <label for="search"> Search: </label>
    <input @keyup="handleSearch" type="text" id="search" />
  </div>
</template>
