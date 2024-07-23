<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '米１グランプリ松江2024｜お米で地方から日本を元気に！',
  meta: [
    { name: 'ogTitle', content: '米１グランプリ松江2024｜お米で地方から日本を元気に！' },
    { name: 'description', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
    { name: 'ogDescription', content: 'こだわりのメニューを食べ比べ、来場者の投票でナンバーワンを決める、お祭りのように楽しく、真剣な食イベント！' },
    { name: 'ogImage', content: '' },
    { name: 'twitterCard', content: '' }
  ],
})
</script>