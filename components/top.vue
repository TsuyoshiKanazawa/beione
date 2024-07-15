<template>
    <div class="top">
        <div class="top-visual">
            <img src="/images/logo.svg" alt="logo" class="logo" ref="logo">
            <div style="width: fit-content;">
                <img src="/images/title.svg" alt="title" class="top-title" ref="title">
                <img src="/images/jaShimane.svg" alt="sponsorship" class="ja-shimane" ref="ja">
                <div class="top-overview" ref="overview">
                    <div class="section">
                        <div class="subject">〈開催日時〉</div>
                        <div class="text">
                            9月7日(土) 11:00～18:00<br>
                            9月8日(日) 11:00～17:00</div>
                    </div>
                    <div class="section">
                        <div class="subject">〈開催場所〉</div>
                        <div class="text">松江市総合体育館 第一駐車場</div>
                    </div>
                    <div class="section">
                        <div class="subject">〈入場料〉</div>
                        <div class="text">無料</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const logo = ref(null);
const title = ref(null);
const ja = ref(null);
const overview = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            }
        });
    });

    if (logo.value) {
        observer.observe(logo.value);
    }
    if (title.value) {
        observer.observe(title.value);
    }
    if (ja.value) {
        observer.observe(ja.value);
    }
    if (overview.value) {
        observer.observe(overview.value);
    }
});
</script>

<style lang="scss" scoped>
.top {
    position: relative;
    font-family: "Noto Sans JP", sans-serif;
    position: relative;
    height: 100vh;
    .top-visual {
        display: flex;
        justify-content: center;
        gap: 2%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        .logo {
            max-width: 603px;
            width: 45vw;
            opacity: 0;
            transition: 0.8s;
            transform: translateY(50px);
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .top-title {
            max-width: 488px;
            width: 37vw;
            margin: -2% 0 0 0;
            opacity: 0;
            transition: 0.8s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .ja-shimane {
            max-width: 361px;
            width: 27vw;
            display: block;
            margin-top: 3%;
            opacity: 0;
            transition: 0.8s;
            transform: translateY(50px);
            transition-delay: 0.4s;
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }

    .top-overview {
        margin-top: 5%;

        .section {
            margin-bottom: 1%;

            .subject {
                font-size: clamp(4px, 1.1vw, 15px);
                width: 7vw;
                font-weight: 800;
                margin-left: -1%;
                margin-top: 3%;
            }

            .text {
                font-size: clamp(8px, 2.2vw, 29px);
                font-weight: 900;
            }
        }
        opacity: 0;
        transition: 0.8s;
        transform: translateY(50px);
        transition-delay: 0.6s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>