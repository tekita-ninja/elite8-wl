<script setup lang="ts"></script>
<template>
    <div
        class="bg-red-50 p-3 rounded-xl backdrop-blur-lg border border-red-200/30 text-red-500 z-30"
    >
        <div class="flex">
            <div class="w-5">
                <Icon name="ep:warn-triangle-filled" />
            </div>
            <div class="flex-1">
                <h2 class="text-sm font-bold">Peringatan!</h2>
                <div class="text-[11px] gap-1 flex items-start">
                    <Icon name="icon-park-outline:dot" class="w-3 h-3 mt-1" />
                    <div class="flex-1">
                        Batas panggilan adalah <b class="underline">Tiga Kali</b> melalui Telpon/WA.
                    </div>
                </div>
                <div class="text-[11px] mt-2 gap-1 flex items-start">
                   <Icon name="icon-park-outline:dot" class="w-3 h-3 mt-1" />
                    <div class="flex-1">
                       Akan diprioritaskan antrian yang sudah di lokasi.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
