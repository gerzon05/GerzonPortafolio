<template>
  <div class="min-h-screen bg-app-bg text-app-text p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
    <div class="max-w-275 w-full flex flex-col h-full md:h-[calc(100vh-4rem)]">
      <Header />

      <main class="flex-1 min-h-0 w-full overflow-hidden mt-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
