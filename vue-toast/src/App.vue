<template>
  <div>
    <h1>Vue Toast Example</h1>
    <button @click="addToast('Hello Vue', { type: 'success', position: 'top' })">
      Show Toast
    </button>
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { useToast } from './composables/useToast'
import ToastContainer from './components/ToastContainer.vue'

const { addToast } = useToast()
</script>
