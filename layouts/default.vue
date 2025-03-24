<template>
    <div
        class="h-screen overflow-auto bg-gradient-to-t from-[#F4E3BE] to-[#140E01] relative"
    >
        <div class="max-w-xl mx-auto px-5 flex flex-col h-full">
            <main class="flex-1 h-full">
                <slot />
            </main>
            <footer
                class="fixed backdrop-blur left-0 right-0  text-[#382909]/50 bottom-0 flex py-2 justify-center items-center text-center w-full text-sm"
            >
                Powered by Tekita.tech
            </footer>
        </div>
    </div>
</template>
