<template>
  </template>

<script>
import { useMainStore } from '@/stores/mainStore'; 

export default {
  name: 'ServicesList',
  setup() {
    const mainStore = useMainStore();
    return {
      services: mainStore.services 
    };
  }
};
</script>