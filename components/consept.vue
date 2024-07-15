<template>
    <div class="consept-conatiner">
        <div class="text-container">
            <div class="title" ref="title">Consept</div>
            <div class="copy" ref="copy">
                お米で地方から<br>
                日本を元気に！
            </div>
            <div class="text" ref="text">
                米1グランプリは、過去に島根県奥出雲町で開催され、<br>
                1日に1万人以上が訪れた大人気のお米イベント。<br>
                お米や米粉を使ったここでしか食べられない<br>
                こだわりのメニューを食べ比べ、<br>
                来場者の投票でナンバーワンを決める、<br>
                お祭りのように楽しく、真剣な食イベント！<br>
                お米のおいしさをみんなで共有し合い、<br>
                その素晴らしさを地方から日本に広げていこう！
            </div>
        </div>
        <img src="/images/consept.png" alt="consept image" ref="image">
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const title = ref(null);
const copy = ref(null);
const text = ref(null);
const image = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            }
        });
    });

    if (title.value) {
        observer.observe(title.value);
    }
    if (copy.value) {
        observer.observe(copy.value);
    }
    if (text.value) {
        observer.observe(text.value);
    }
    if (image.value) {
        observer.observe(image.value);
    }
});
</script>

<style lang="scss" scoped>
.consept-conatiner {
    display: flex;
    justify-content: center;
    gap: 3%;
    margin-top: 5%;
    .text-container {
        font-weight: 700;
        .title {
            font-family: "Roboto", sans-serif;
            font-size: clamp(14px, 1.5vw, 24px);
            opacity: 0;
            transition: 0.4s;
            transform: translateY(50px);
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .copy {
            font-size: clamp(33px, 3vw, 55px);
            margin-top: 4%;
            opacity: 0;
            transition: 0.4s;
            transform: translateY(50px);
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .text {
            font-size: clamp(14px, 1.5vw, 24px);
            margin-top: 5%;
            line-height: 2.3;
            opacity: 0;
            transition: 0.4s;
            transform: translateY(50px);
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    img {
        max-width: 479px;
        min-width: 306px;
        width: 29vw;
        object-fit: contain;
        margin-top: 4%;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>