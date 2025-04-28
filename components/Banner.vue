<script setup lang="ts">
const controller = useWaitlistStore();
await controller.getBanner();
</script>
<template>
    <div
        v-if="controller.banners.length > 0"
        class="mt-4 max-w-[261px] md:max-w-sm mx-auto overflow-hidden aspect-auto backdrop-blur rounded-xl shadow shadow-[#CBAA61] bg-gradient-to-tr from-[#CBAA61]/20 via-slate-950/90 to-[#CBAA61]/50 text-slate-100"
    >
        <Swiper
            class="h-full w-full"
            :speed="1000"
            :modules="[SwiperAutoplay, SwiperPagination]"
            :pagination="{
                clickable: true,
                bulletActiveClass: 'swipper-pagination-bullet-active',
            }"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
                delay: 2000,
                disableOnInteraction: true,
            }"
        >
            <SwiperSlide
                class="h-full w-full flex items-center justify-center bg-gradient-to-tr from-[#CBAA61]/20 via-slate-950/90 to-[#CBAA61]/50"
                v-for="slide in controller.banners"
                :key="slide.id"
            >
                <img
                    class="h-full w-full object-cover"
                    :src="toLinkAsset(slide.filename)"
                    alt="image"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style>
.swipper-pagination-bullet-active {
    background-color: #b4851e !important;
    opacity: 100%;
    width: 16px;
    border-radius: 10px;
    transition: all ease-in-out 0.3s;
}
.swipper-pagination-bullet {
    background-color: #000;
}
</style>
