<template>
  <div>
    <div v-for="toast in toasts" :key="toast.id">
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastContext } from '../composables/useToast'

const { toasts } = useToastContext()

</script>
