<script setup lang="ts">
import { type TWaitlistItem } from '@/types/waitlist';
defineProps<{ item: TWaitlistItem }>()
</script>

<template>
  <div class="flex items-center gap-2 border-t border-slate-700 py-2">
    <div
      class="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#CBAA61] text-slate-950 text-xl font-bold">
      {{ item.queueNumber }}
    </div>
    <div class="flex-1">
      <div class="font-bold text-sm">{{ item.customer.name }}</div>
      <div class="text-sm">{{ subStringText(item.customer.phone) }}</div>
    </div>
  </div>
</template>
