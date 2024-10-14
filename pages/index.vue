<template>
  <div class="my-8">
    <div class="space-y-4">
      <a href="https://drive.google.com/drive/folders/1qmk-xTu4Z08maOPPXsDURabVtITXBz38?usp=sharing" target="_blank"
        rel="noopener noreferrer"
        class="flex p-5 border gap-x-2 items-center backdrop-blur border-slate-900 rounded-xl shadow shadow-[#CBAA61] bg-gradient-to-tr from-[#CBAA61]/20 via-slate-950/90 to-[#CBAA61]/50 text-slate-100">
        <Icon class="w-8 h-8 text-white" name="material-symbols:fastfood-rounded" />
        <p class="text-lg font-semibold">MENU</p>
      </a>
      <NuxtLink
      href="/waitlist"
        class="flex p-5 border gap-x-2 items-center backdrop-blur border-slate-900 rounded-xl shadow shadow-[#CBAA61] bg-gradient-to-tr from-[#CBAA61]/20 via-slate-950/90 to-[#CBAA61]/50 text-slate-100">
        <Icon class="w-8 h-8 text-white" name="fluent:document-bullet-list-clock-20-regular" />
        <p class="text-lg font-semibold">WAITLIST</p>
      </NuxtLink>
    </div>
  </div>
</template>