<template>
    <div class="access-container">
        <div class="text-container">
            <div class="title" ref="title">Access</div>
            <div class="name" ref="name">
                松江市総合体育館<br>
                第一駐車場
            </div>
            <div class="address" ref="address">（島根県松江市学園南１丁目２１−１）</div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.137844635847!2d133.064563997907!3d35.471139088462046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355704f87cf75fdf%3A0x83c61aa1bd660812!2z5p2-5rGf5biC57eP5ZCI5L2T6IKy6aSo!5e0!3m2!1sja!2sjp!4v1720857575711!5m2!1sja!2sjp"
                style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="googleMap sp-only"
                ref="googleMapSp">
            </iframe>
            <div class="text" ref="text">
                会場には専用駐車場がございませんので、<br>
                近隣の駐車場または公共交通機関をご利用ください。<br>
                皆様のご協力をお願いいたします。
            </div>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.137844635847!2d133.064563997907!3d35.471139088462046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355704f87cf75fdf%3A0x83c61aa1bd660812!2z5p2-5rGf5biC57eP5ZCI5L2T6IKy6aSo!5e0!3m2!1sja!2sjp!4v1720857575711!5m2!1sja!2sjp"
            style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="googleMap pc-only"
            ref="googleMapPc">
        </iframe>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const title = ref(null);
const name = ref(null);
const address = ref(null);
const text = ref(null);
const googleMapPc = ref(null);
const googleMapSp = ref(null);

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
    if (name.value) {
        observer.observe(name.value);
    }
    if (address.value) {
        observer.observe(address.value);
    }
    if (text.value) {
        observer.observe(text.value);
    }
    if (googleMapPc.value) {
        observer.observe(googleMapPc.value);
    }
    if (googleMapSp.value) {
        observer.observe(googleMapSp.value);
    }
});
</script>

<style lang="scss" scoped>
.access-container {
    display: flex;
    justify-content: center;
    gap: 4%;
    margin: 5% 0;
    @media screen and (max-width: 767px) {
        display: block;
        margin: 20% 0;
        padding: 0 8%;
    }
    .text-container {
        .title {
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: clamp(18px, 1.6vw, 24px);
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            @media screen and (max-width: 767px) {
                font-size: 5vw;
            }
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .name {
            font-weight: 800;
            font-size: clamp(24px, 2vw, 32px);
            margin-top: 6%;
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            @media screen and (max-width: 767px) {
                font-size: 8vw;
            }
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .address {
            font-weight: 800;
            font-size: clamp(14px, 1.2vw, 20px);
            margin-top: 2%;
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            @media screen and (max-width: 767px) {
                font-size: 4.4vw;
                margin-left: -5%;
            }
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .text {
            font-weight: 500;
            font-size: clamp(12px, 1vw, 17px);
            margin-top: 10%;
            opacity: 0;
            transition: 0.6s;
            transform: translateY(50px);
            transition-delay: 0.2s;
            @media screen and (max-width: 767px) {
                margin-top: 5%;
                font-size: 3.2vw;
                line-height: 1.6;
            }
            &.inview {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
    .googleMap {
        max-width: 620px;
        max-height: 420px;
        width: 38vw;
        height: 26vw;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        border-radius: 20px;
        @media screen and (max-width: 767px) {
            width: 100%;
            height: 55vw;
            margin-top: 7%;
        }
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>