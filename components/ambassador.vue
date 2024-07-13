<template>
    <div class="abd-container">
        <div class="title" ref="title">イベントアンバサダー</div>
        <div class="abd-contents">
            <img src="/images/ambassador.jpg" alt="ambassador picture" class="abd-pic" ref="image">
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
const image = ref(null);
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
    if (image.value) {
        observer.observe(image.value);
    }
    if (text.value) {
        observer.observe(text.value);
    }
});
</script>

<style lang="scss" scoped>
.abd-container {
    max-width: 1192px;
    max-height: 509px;
    min-width: 800px;
    min-height: 341px;
    width: 75vw;
    height: 33vw;
    background-color: #FED9D9;
    margin: auto;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 3% 4% 0;
    .title {
        font-size: clamp(20px, 2vw, 32px);
        text-align: center;
        font-weight: 700;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
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
            .heading {
                font-size: clamp(20px, 2vw, 32px);
            }
            .text {
                margin-top: 4%;
                font-size: clamp(10px, 0.9vw, 14px);
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
}
</style>