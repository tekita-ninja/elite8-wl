<script setup lang="ts">
import { type TWaitlistItem } from '@/types/waitlist';
defineProps<{
  item: TWaitlistItem,
  number: number
}>()
</script>

<template>
  <div class="flex items-center gap-2 border-t border-white/5 py-2">
    <div
      class="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#CBAA61] text-slate-950 text-xl font-bold">
      {{ number + 1 }}
    </div>
    <div class="flex-1 flex justify-between items-center">
      <div>
        <div class="font-bold text-sm">{{ item.name }}</div>
        <div class="text-sm">{{ subStringText(item.phoneNumber) }}</div>
      </div>
      <div class="text-sm flex items-center gap-1">
        <Icon name="ph:users-bold" />
        {{ item.numOfPax }}
      </div>
    </div>
  </div>
</template>
