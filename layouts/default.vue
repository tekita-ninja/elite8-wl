<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <Header />
    <main class="max-w-xl mx-auto px-5">
      <slot />
    </main>
    <div class="fixed bottom-6 py-2 left-0 right-0 px-6 flex flex-col items-end gap-2 z-20">
      <a href="http://ig" target="_blank" rel="noopener noreferrer">
        <Icon class="h-8 w-8" name="logos:whatsapp-icon" />
      </a>
      <a href="http://ig" target="_blank" rel="noopener noreferrer">
        <Icon class="h-8 w-8" name="skill-icons:instagram" />
      </a>
    </div>
  </div>
</template>