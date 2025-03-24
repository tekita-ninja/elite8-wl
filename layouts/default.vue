<template>
    <div
        class="h-screen overflow-auto bg-gradient-to-t from-[#F4E3BE] to-[#140E01]"
    >
        <div class="max-w-xl mx-auto px-5 relative flex flex-col h-full">
            <main class="flex-1 h-full">
                <slot />
            </main>
            <footer
                class="sticky text-[#382909]/50 bottom-0 flex py-2 justify-center items-center text-center w-full text-sm"
            >
                Powered by Tekita.tech
            </footer>
        </div>
    </div>
</template>
