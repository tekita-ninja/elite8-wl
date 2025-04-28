<template>
    <div class="pb-10 md:pb-12">
        <Header />
        <div class="space-y-4 mt-6 mb-[40px]">
            <a
                href="https://drive.google.com/file/d/1G1liYRijRjM_1rj_l4WUsP8KW-xWvaXG/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                class="relative p-[12px] flex rounded-xl w-full justify-start text-start bg-gradient-to-tr from-[#F4E3BE]/50 to-[#140E01]/50 shadow-lg shadow-[#140E01]/10"
            >
                <div class="absolute w-36 h-full right-0 top-0 bottom-0">
                    <img
                        class="w-full h-full object-cover object-left"
                        src="/ills/ill-menu.svg"
                        alt=""
                    />
                </div>
                <div class="p-3 flex-1 relative z-10">
                    <h2
                        class="text-[26px] md:text-2xl font-bold bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
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
                class="relative p-[12px] flex rounded-xl w-full justify-start text-start bg-gradient-to-tr from-[#F4E3BE]/50 to-[#140E01]/50 shadow-lg shadow-[#140E01]/10"
            >
                <div class="absolute right-0 top-0 bottom-0">
                    <img
                        class="w-full h-full object-cover object-left"
                        src="/ills/ill-wl.svg"
                        alt=""
                    />
                </div>
                <div class="p-3 relative z-10">
                    <h2
                        class="text-[26px] md:text-2xl font-bold bg-gradient-to-r from-[#B99954] to-[#F4E3BE] inline-block text-transparent bg-clip-text"
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
