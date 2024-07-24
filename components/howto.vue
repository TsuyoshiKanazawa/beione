<template>
    <div class="howto-conatiner">
        <div class="text-container">
            <div class="title" ref="title">How to enjoy BEI-ONE GP</div>
            <div class="text" ref="text">
                米1グランプリ<br>
                松江の<br class="pc-only">楽しみ方
            </div>
        </div>
        <div class="step-container">
            <div class="section" ref="section1">
                <div class="step">
                    STEP<br>
                    <div class="large">1</div>
                </div>
                <div class="exp">
                    <div class="text">飲食チケットを購入</div>
                    <div class="small">※各ブースでの直接のお支払いはできません！</div>
                    <div class="small">※チケットは各ブースの営業時間内にご利用願います。</div>
                </div>
            </div>
            <div class="section" ref="section2">
                <div class="step">
                    STEP<br>
                    <div class="large">2</div>
                </div>
                <div class="exp">
                    <div class="text">チケット購入で<br class="sp-only">投票用紙をゲット</div>
                    <div class="small">※500円購入ごとに1枚の投票用紙をお渡しします！</div>
                </div>
            </div>
            <div class="section" ref="section3">
                <div class="step">
                    STEP<br>
                    <div class="large">3</div>
                </div>
                <div class="exp">
                    <div class="text">お気に入りのお店を探す</div>
                    <div class="small">※ステージイベントや企業PRブースも楽しみながら！</div>
                </div>
            </div>
            <div class="section" ref="section4">
                <div class="step">
                    STEP<br>
                    <div class="large">4</div>
                </div>
                <div class="exp">
                    <div class="text">お気に入りのお店に投票</div>
                    <div class="small">※複数のお店に投票も、推しのお店に大量投票も可能！</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const title = ref(null);
const text = ref(null);
const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const section4 = ref(null);

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
    if (text.value) {
        observer.observe(text.value);
    }
    if (section1.value) {
        observer.observe(section1.value);
    }
    if (section2.value) {
        observer.observe(section2.value);
    }
    if (section3.value) {
        observer.observe(section3.value);
    }
    if (section4.value) {
        observer.observe(section4.value);
    }
});
</script>

<style lang="scss" scoped>
.howto-conatiner {
    display: flex;
    justify-content: center;
    gap: 7%;
    margin: 10% 0 4%;
    @media screen and (max-width: 767px) {
        display: block;
        padding: 0 8%;
        margin: 15% 0 4%;
    }
    .text-container {
        font-weight: 700;
        .title {
            font-family: "Roboto", sans-serif;
            font-size: clamp(14px, 1.8vw, 24px);
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
            @media screen and (max-width: 767px) {
                font-size: 4vw;
            }
        }
        .text {
            font-size: clamp(33px, 4vw, 55px);
            line-height: 1.3;
            margin-top: 5%;
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
            @media screen and (max-width: 767px) {
                font-size: 8vw;
            }
        }
    }
    .step-container {
        margin-top: -4%;
        @media screen and (max-width: 767px) {
            margin-top: 8%;
        }
        .section {
            display: flex;
            justify-content: flex-start;
            gap: 3%;
            width: 32vw;
            margin-top: 5%;
            @media screen and (max-width: 767px) {
                width: auto;
            }
            .step {
                background-color: #FFDD55;
                width: 4.5vw;
                max-width: 70px;
                height: 4.5vw;
                max-height: 70px;
                text-align: center;
                font-size: clamp(7px, 0.9vw, 15px);
                font-weight: 700;
                font-family: "Roboto", sans-serif;
                border-radius: 50%;
                padding: 1.5% 0;
                box-sizing: border-box;
                .large {
                    font-size: clamp(18px, 2.3vw, 36px);
                }
                @media screen and (max-width: 767px) {
                    max-width: none;
                    max-height: none;
                    width: 14vw;
                    height: 14vw;
                    font-size: 3vw;
                    padding-top: 2%;
                    .large {
                        font-size: 7vw;
                    }
                }
            }
            .exp {
                @media screen and (min-width: 768px) {
                    height: 5vw;
                    min-height: 50px;
                }
                .text {
                    font-weight: 700;
                    font-size: clamp(18px, 1.6vw, 28px);
                    margin-top: 2%;
                    @media screen and (max-width: 767px) {
                        font-size: 5.5vw;
                        line-height: 1.2;
                        margin-top: 1%;
                    }
                }
                .small {
                    font-weight: 400;
                    font-size: clamp(8px, 1vw, 16px);
                    @media screen and (max-width: 767px) {
                        font-size: 2.5vw;
                        margin-top: 3%;
                    }
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
}
</style>