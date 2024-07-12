<template>
    <header :class="{ 'header-hidden': isHeaderHidden }">
        <div class="logo">
            <img src="/images/hd-logo.svg" alt="">
        </div>
        <ul>
            <li>開催概要</li>
            <li>コンセプト</li>
            <li>出店者</li>
            <li>ステージ</li>
            <li>アクセス</li>
            <li>IZUMO OROCHI FES 2024 IN MATSUE</li>
        </ul>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isHeaderHidden: false,
            lastScrollY: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > this.lastScrollY) {
                // 下にスクロール
                this.isHeaderHidden = true;
            } else {
                // 上にスクロール
                this.isHeaderHidden = false;
            }
            this.lastScrollY = currentScrollY;
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    max-width: 1138px;
    width: 90vw;
    height: 62px;
    background-color: #2D2D2D;
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    border-radius: 40px;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding-left: 4%;
    box-sizing: border-box;
    transition: transform 0.3s ease, opacity 0.5s ease;
    .logo {
        height: fit-content;
        margin: auto 0;
        img {
            display: block;
            margin: auto;
        }
    }
    ul {
        width: 72%;
        line-height: 30px;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        font-size: clamp(8px, 1.1vw, 16px);
        li {
            height: 30px;
            display: block;
            margin: auto;
        }
    }
}
.header-hidden {
    transform: translate(-50%, -200%) !important;
    opacity: 0;
}
@media screen and (max-width: 767px) {
    
}
</style>