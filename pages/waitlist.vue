<script setup lang="ts">
import axios from 'axios';
import type { TWaitlistItem } from '@/types/waitlist';
const baseUrl = import.meta.env.VITE_BASE_URL
const data = ref<TWaitlistItem[]>([]);
onMounted(() => initialData())
async function initialData() {
  const response = await axios.get(`${baseUrl}/queue-pools/list`)
  data.value = response.data
  
}
</script>

<template>
  <div
    class="p-3 md:p-6 my-5 border border-slate-900 rounded-xl bg-gradient-to-tr from-[#CBAA61]/20 via-slate-900 to-[#CBAA61]/20 text-slate-100">
    <div class="mb-2 font-bold text-xl md:text-2xl">Waitlist</div>
    <div v-if="true">
      <template v-for="item in data" :key="item.id">
        <WaitlistItem :item="item" />
      </template>
    </div>
    <div v-else class="bg-slate-800/10 flex items-center justify-center flex-col border-dashed p-4 rounded-xl">
      <Icon class="w-12 h-12" name="line-md:file-document-remove-twotone" />
      <p class="text-sm">No Waitlist</p>
    </div>
  </div>
</template>