<template>
    <div class="abd-container">
        <img src="/images/ambassador.jpg" alt="ambassador picture" class="abd-pic sp-only" ref="imageSp">
        <div class="title" ref="title">イベントアンバサダー</div>
        <div class="abd-contents">
            <img src="/images/ambassador.jpg" alt="ambassador picture" class="abd-pic pc-only" ref="imagePc">
            <div class="text-container" ref="text">
                <div class="heading">
                    親子向け音楽ユニット<br>
                    「おむすびーず」
                </div>
                <div class="text">
                    荒木まどかが第一子を妊娠した時に、<br>
                    「子供だけでなく、お母さんやお父さんも元気づけたい！」と思って、<br>
                    同級生のシンガーソングライター門脇大樹と一緒に結成した<br>
                    ユニット、それが「おむすびーず」です。<br>
                    結成から6年が経ちました。<br>
                    活動開始直後にコロナで一時お休みしてたけど、去年から活動を<br>
                    再開！松江市内の保育園を中心に訪問ライブをしたり、<br>
                    いろんなイベントに出演しています。<br>
                    去年の12月には結成5周年記念の単独ライブを開催し、約500人が<br>
                    来場。「おむすびーずのテーマ」を聴けばおむすびが食べたくなるし、<br>
                    「大好き」という曲はお母さんたちの涙を誘うこと間違いなし！
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const title = ref(null);
const imagePc = ref(null);
const imageSp = ref(null);
const text = ref(null);

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
    if (imagePc.value) {
        observer.observe(imagePc.value);
    }
    if (imageSp.value) {
        observer.observe(imageSp.value);
    }
    if (text.value) {
        observer.observe(text.value);
    }
});
</script>

<style lang="scss" scoped>
.abd-container {
    @media screen and (min-width: 768px) {
        max-width: 1192px;
        max-height: 509px;
        min-width: 800px;
        min-height: 341px;
    }
    width: 75vw;
    height: 33vw;
    background-color: #FED9D9;
    margin: auto;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 3% 4% 0;
    @media screen and (max-width: 767px) {
        width: 85vw;
        height: auto;
        position: relative;
        margin-top: 45%;
    }
    .title {
        font-size: clamp(20px, 2vw, 32px);
        text-align: center;
        font-weight: 700;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        @media screen and (max-width: 767px) {
            writing-mode: vertical-rl;
            font-size: 4.7vw;
            position: absolute;
            top: 3%;
            right: 4%;
            letter-spacing: 0.12rem;
        }
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .abd-contents {
        margin-top: 2%;
        display: flex;
        justify-content: flex-start;
        gap: 3%;
        .abd-pic {
            max-width: 534px;
            width: 50%;
            border-radius: 40px;
            object-fit: contain;
            height: fit-content;
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .text-container {
            font-weight: 700;
            @media screen and (max-width: 767px) {
                margin-top: 45%;
                margin-bottom: 5%;
            }
            .heading {
                font-size: clamp(20px, 2vw, 32px);
                @media screen and (max-width: 767px) {
                    font-size: 6vw;
                }
            }
            .text {
                margin-top: 4%;
                font-size: clamp(10px, 0.9vw, 14px);
                @media screen and (max-width: 767px) {
                    font-size: 3.3vw;
                }
            }
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
    .abd-pic.sp-only {
        position: absolute;
        top: -15%;
        left: -25%;
        width: 90vw;
        border-radius: 20px;
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