<script setup lang="ts">
const route = useRoute();
const router = useRouter();
</script>
<template>
    <header>
        <div class="h-36 flex items-center">
            <img
                class="w-32 h-32 object-contain mx-auto"
                src="/logo-sm.png"
                alt="logo elite eight"
            />
        </div>
        <div class="flex justify-center gap-3 text-[#B99954]">
            <a
                class="flex items-center gap-2"
                href="https://api.whatsapp.com/send?phone=6287869129888&text=Hallo%20Kak%20,%20Saya%20mau%20booking%20dong%20atas%20nama:%20"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon class="h-8 w-8" name="mdi:instagram" />
                <p class="text-xl font-semibold">Instagram</p>
            </a>
            <a
                class="flex items-center gap-2"
                href="https://www.instagram.com/elite8_id/profilecard/?igsh=MTN1YnEwdmo5MXNs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon class="h-8 w-8" name="ic:baseline-whatsapp" />
                <p class="text-xl font-semibold">Whatsapp</p>
            </a>
        </div>
    </header>
</template>
