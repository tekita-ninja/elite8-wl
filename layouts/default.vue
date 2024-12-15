<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <Header />
    <main class="max-w-xl mx-auto px-5">
      <slot />
    </main>
    <div class="max-w-xl mx-auto px-5 fixed bottom-6 py-2 left-0 right-0 flex flex-col items-end gap-2 z-20">
      <a href="https://api.whatsapp.com/send?phone=6287869129888&text=Hallo%20Kak%20,%20Saya%20mau%20booking%20dong%20atas%20nama:%20"
        target="_blank" rel="noopener noreferrer">
        <Icon class="h-8 w-8" name="logos:whatsapp-icon" />
      </a>
      <a href="https://www.instagram.com/elite8_id/profilecard/?igsh=MTN1YnEwdmo5MXNs" target="_blank"
        rel="noopener noreferrer">
        <Icon class="h-8 w-8" name="skill-icons:instagram" />
      </a>
    </div>
    <div class="fixed bottom-0 backdrop-blur py-2 text-center left-0 right-0">
      <p class="text-xs font-semibold">Powered by Tekita.tech</p>
    </div>
  </div>
</template>