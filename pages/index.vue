<template>
    <div>
        <Header />
        <div class="space-y-4 mt-6">
            <a
                href="https://drive.google.com/file/d/1G1liYRijRjM_1rj_l4WUsP8KW-xWvaXG/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                class="relative flex rounded-xl w-full justify-start text-start bg-gradient-to-tr from-[#F4E3BE]/50 to-[#140E01]/50 shadow-lg shadow-[#140E01]/10"
            >
                <div class="absolute right-0 top-0 bottom-0">
                    <img
                        class="w-full h-full object-contain"
                        src="/ills/ill-menu.svg"
                        alt=""
                    />
                </div>
                <div class="p-3 relative z-10">
                    <h2
                        class="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
                    >
                        Lihat Menu
                    </h2>
                    <p class="text-white text-xs md:text-sm">
                        Menu tersedia dalam format PDF
                    </p>
                </div>
            </a>
            <NuxtLink
                href="/waitlist"
                class="relative flex rounded-xl w-full justify-start text-start bg-gradient-to-tr from-[#F4E3BE]/50 to-[#140E01]/50 shadow-lg shadow-[#140E01]/10"
            >
                <div class="absolute right-0 top-0 bottom-0">
                    <img
                        class="w-full h-full object-contain"
                        src="/ills/ill-wl.svg"
                        alt=""
                    />
                </div>
                <div class="p-3 relative z-10">
                    <h2
                        class="text-lg md:text-2xl font-bold bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
                    >
                        Wait List
                    </h2>
                    <p class="text-white text-xs md:text-sm">
                        Daftar antrian saat ini
                    </p>
                </div>
            </NuxtLink>
        </div>
        <Banner />
    </div>
</template>
