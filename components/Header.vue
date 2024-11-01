<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>
<template>
  <div :class="[
    'max-w-xl mx-auto px-2 sticky top-0 backdrop-blur bg-slate-950/50',
    route.path !== '/' ? '' : ''
  ]">
    <button @click="router.push('/')" class="absolute top-7 left-4" v-if="route.path !== '/'">
      <Icon class="h-6 w-6" name="ion:arrow-back" />
    </button>
    <div :class="[
      'mx-auto',
      route.path !== '/' ? 'h-20 w-20' : 'h-32 w-32 '
    ]">
      <img class="w-full h-full object-cover" src="/logo-sm.png" alt="logo elite eight">
    </div>
  </div>
</template>
