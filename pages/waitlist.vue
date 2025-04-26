<script setup lang="ts">
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
onMounted(() => initialData());

const controller = useWaitlistStore();

async function initialData() {
    await controller.get({
        rowsPerPage: 10,
        page: 1,
    });
}

async function handleChangePage(e: number) {
    await controller.get({
        rowsPerPage: 10,
        page: e,
    });
}
</script>

<template>
    <div class="pt-6 pb-10 md:pb-12">
        <div class="flex items-center">
            <NuxtLink
                class="h-8 w-8 shrink-0 rounded-md bg-[#F4E3BE] flex items-center justify-center"
                href="/"
            >
                <Icon name="solar:arrow-left-linear" />
            </NuxtLink>
            <div class="flex-1 pr-6">
                <img
                    class="w-20 h-20 object-contain mx-auto"
                    src="/logo-sm.png"
                    alt="logo elite eight"
                />
            </div>
        </div>
        <div class="flex flex-col text-center mb-3">
            <h2
                class="text-lg md:text-3xl font-bold bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
            >
                Wait List
            </h2>
            <p
                class="text-sm bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
            >
                Daftar antrian saat ini
            </p>
        </div>
        <div class="mb-4 pb-1">
            <Announcement />
        </div>
        <div>
            <a
                class="flex items-center justify-center gap-2 h-10 rounded-lg text-[#B99954] w-full bg-[#140E01]"
                href="https://api.whatsapp.com/send?phone=6287869129888&text=Hallo%20Kak%20,%20Saya%20mau%20booking%20dong%20atas%20nama:%20"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon name="ph:list-plus-bold" />
                <p>Make a Reservation</p>
            </a>
        </div>
        <div
            class="p-3 md:p-6 my-5 rounded-xl bg-gradient-to-tr from-[#C7A457] via-[#382909]/20 to-[#382909]/80 text-slate-100"
        >
            <div class="mb-2 flex justify-between items-center">
                <div class="font-bold text-xl md:text-2xl">Waitlist</div>
                <button
                    @click="initialData"
                    class="h-8 w-8 border flex items-center justify-center rounded-md bg-white text-slate-900"
                >
                    <Icon
                        name="lineicons:reload"
                        :class="[controller.loading ? 'animate-spin' : '']"
                    />
                </button>
            </div>
            <div v-if="!controller.loading">
                <template
                    v-for="(item, index) in controller.results.data"
                    :key="item.id"
                >
                    <WaitlistItem :item="item" :number="index" />
                </template>
            </div>
            <div
                v-else
                class="bg-slate-800/10 flex items-center justify-center flex-col border-dashed p-4 rounded-xl"
            >
                <Icon
                    class="w-12 h-12"
                    name="line-md:file-document-remove-twotone"
                />
                <p class="text-sm">No Waitlist</p>
            </div>
        </div>
        <div
            v-if="
                controller.results.meta && controller.results.meta?.lastPage > 1
            "
            class="pagination-container flex items-center justify-center mb-3"
        >
            <v-pagination
                hideFirstButton
                hideLastButton
                v-model="controller.results.meta.currentPage"
                :pages="controller.results.meta?.lastPage"
                @update:model-value="handleChangePage"
            />
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
    background-color: #fff !important;
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
    background-color: #c5aa6c !important;
    color: #000;
    font-weight: 600;
}

.pagination-container .Pagination .PaginationControl {
    background-color: #fff !important;
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
