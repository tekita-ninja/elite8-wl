<script setup lang="ts">
import type { TWaitlistItem } from '@/types/waitlist';
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
const data = ref<TWaitlistItem[]>([]);
onMounted(() => initialData())

const controller = useWaitlistStore()

async function initialData() {
  await controller.get({
    rowsPerPage: 10,
    page: 1
  })

}

async function handleChangePage(e: any) {
  await controller.get({
    rowsPerPage: 10,
    page: e
  })
}
</script>

<template>
  <div>
    <div
      class="p-3 md:p-6 my-5 border border-slate-900 rounded-xl bg-gradient-to-tr from-[#CBAA61]/20 via-slate-900 to-[#CBAA61]/20 text-slate-100">
      <div class="mb-2 font-bold text-xl md:text-2xl">Waitlist</div>
      <div v-if="true">
        <template v-for="(item,index) in controller.results.data" :key="item.id">
          <WaitlistItem :item="item" :number="index" />
        </template>
      </div>
      <div v-else class="bg-slate-800/10 flex items-center justify-center flex-col border-dashed p-4 rounded-xl">
        <Icon class="w-12 h-12" name="line-md:file-document-remove-twotone" />
        <p class="text-sm">No Waitlist</p>
      </div>
    </div>
    <div v-if="controller.results.meta && controller.results.meta?.lastPage > 1" class="pagination-container flex items-center justify-center">
      <v-pagination hideFirstButton hideLastButton v-model="controller.results.meta.currentPage"
        :pages="controller.results.meta?.lastPage" @update:model-value="handleChangePage" />
    </div>
  </div>
</template>


<style>

.pagination-container .Pagination {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

.pagination-container .Pagination .Page {
  background-color: #FFF !important;
  color: #334155;
  min-height: 35px;
  min-width: 35px;
  font-size: 16px;
  padding: 2px;
  border: none;
  border-radius: 50%;
}

.pagination-container .Pagination .Page.Page-active {
  cursor: default;
  background-color: #C5AA6C !important;
  color: #000;
  font-weight: 600;
}

.pagination-container .Pagination .PaginationControl {
  background-color: #FFF !important;
  height: 35px;
  width: 35px;
  margin: 0 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 10px;
}

</style>