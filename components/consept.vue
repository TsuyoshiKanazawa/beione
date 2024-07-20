<template>
    <div class="consept-conatiner">
        <div class="text-container">
            <div class="title" ref="title">Consept</div>
            <div class="copy" ref="copy">
                お米で地方から<br>
                日本を元気に！
            </div>
            <div class="text pc-only" ref="textPc">
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
        <img src="/images/consept.png" alt="consept image" ref="imagePc" class="pc-only">
        <img src="/images/sp/consept.png" alt="consept image" ref="imageSp" class="sp-only">
        <div class="text sp-only" ref="textSp">
            米1グランプリは、過去に島根県奥出雲町で<br>
            開催され、1日に1万人以上が訪れた大人気の<br>
            お米イベント。<br>
            お米や米粉を使ったここでしか食べられない<br>
            こだわりのメニューを食べ比べ、来場者の<br>
            投票でナンバーワンを決める、お祭りのように<br>
            楽しく、真剣な食イベント！<br>
            お米のおいしさをみんなで共有し合い、<br>
            その素晴らしさを地方から<br>
            日本に広げていこう！
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const title = ref(null);
const copy = ref(null);
const textPc = ref(null);
const textSp = ref(null);
const imagePc = ref(null);
const imageSp = ref(null);

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
    if (textPc.value) {
        observer.observe(textPc.value);
    }
    if (textSp.value) {
        observer.observe(textSp.value);
    }
    if (imagePc.value) {
        observer.observe(imagePc.value);
    }
    if (imageSp.value) {
        observer.observe(imageSp.value);
    }
});
</script>

<style lang="scss" scoped>
.consept-conatiner {
    display: flex;
    justify-content: center;
    gap: 3%;
    margin-top: 5%;
    @media screen and (max-width: 767px) {
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 15%;
        gap: 5%;
    }
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
            @media screen and (max-width: 767px) {
                font-size: 4vw;
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
            @media screen and (max-width: 767px) {
                writing-mode: vertical-rl;
                font-size: 9.5vw;
                margin-top: 20%;
                width: 29vw;
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
        @media screen and (max-width: 767px) {
            width: 60vw;
            min-width: 0;
            margin-top: 3%;
        }
    }
    .text.sp-only {
        font-weight: 700;
        font-size: 4.1vw;
        line-height: 1.7;
        margin: 5% auto 0;
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