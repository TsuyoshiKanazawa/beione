<template>
    <header :class="{ 'header-hidden': isHeaderHidden }">
        <div class="logo pc-only" @click="scrollTo('top')">
            <img src="/images/hd-logo.svg" alt="logo">
        </div>
        <div class="logo sp-only" @click="scrollTo('top')">
            <img src="/images/sp/hd-logo.svg" alt="logo">
        </div>
        <ul>
            <li @click="scrollTo('top')">開催概要</li>
            <li @click="scrollTo('consept')">コンセプト</li>
            <li @click="scrollTo('shopInfo')">出店者</li>
            <li @click="scrollTo('stageInfo')">ステージ</li>
            <li @click="scrollTo('access')">アクセス</li>
            <a href="https://izumoorochifes.jp/" target="_blank">IZUMO OROCHI FES 2024 IN MATSUE</a>
        </ul>
        <div class="hamberger sp-only" @click="handleMenuShow" :class="{ show: menuShow }">
            <span class="topLine"></span>
            <span class="bottomLine"></span>
            <div class="sp-menu" :class="{ show: menuShow }">
                <ul>
                    <li @click="scrollTo('top')">開催概要</li>
                    <li @click="scrollTo('consept')">コンセプト</li>
                    <li @click="scrollTo('shopInfo')">出店者</li>
                    <li @click="scrollTo('stageInfo')">ステージ</li>
                    <li @click="scrollTo('access')">アクセス</li>
                    <a href="https://izumoorochifes.jp/" target="_blank">IZUMO<br>OROCHI FES<br>2024<br>IN MATSUE</a>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isHeaderHidden: false,
            lastScrollY: 0,
            scrollThreshold: 0,
            menuShow: false
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
            const isMobile = window.innerWidth <= 767;
            const currentScrollY = window.scrollY;
            const threshold = isMobile ? 20 : this.scrollThreshold;

            if (!this.menuShow) {
                if (currentScrollY > this.lastScrollY + threshold) {
                    // 下にスクロール
                    this.isHeaderHidden = true;
                } else if (currentScrollY < this.lastScrollY - threshold) {
                    // 上にスクロール
                    this.isHeaderHidden = false;
                }
                this.lastScrollY = currentScrollY;
            }
        },
        scrollTo(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        },
        handleMenuShow() {
            this.menuShow = !this.menuShow
            console.log(this.menuShow)
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
    @media screen and (max-width: 767px) {
        width: 100%;
        border-radius: 0%;
        justify-content: space-between;
        background-color: transparent;
        top: 1%;
        transition: transform 0.4s ease, opacity 0.5s ease;
        padding-top: 4%;
    }
    .logo {
        height: fit-content;
        margin: auto 0;
        cursor: pointer;
        @media screen and (max-width: 767px) {
            height: 13vw;
            position: relative;
        }
        img {
            display: block;
            margin: auto;
            @media screen and (max-width: 767px) {
                width: 61vw;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
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
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                color: #FFDD55;
            }
        }
        a {
            height: 30px;
            display: block;
            margin: auto;
            cursor: pointer;
            transition: 0.2s;
            color: #fff;
            text-decoration: none;
            &:hover {
                color: #FFDD55;
            }
        }
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
    .hamberger {
        background-color: #2D2D2D;
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        margin: 0 5%;
        position: relative;
        cursor: pointer;
        transition: background-color 0.2s;
        .topLine,
        .bottomLine
        {
            display: block;
            width: 50%;
            height: 2px;
            background-color: #fff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            transition: transform 0.4s;
            z-index: 1000;
        }
        .topLine {
            top: 33%;
        }
        .bottomLine {
            top: 62%;
        }
        &.show {
            background-color: transparent;
            .topLine,
            .bottomLine {
                display: block;
                width: 50%;
                height: 2px;
                background-color: #fff;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            .topLine {
                top: 50%;
                transform: translateX(-50%) rotate(45deg);
            }
            .bottomLine {
                top: 50%;
                transform: translateX(-50%) rotate(-45deg);
            }
        }
        .sp-menu {
            background-color: rgba(45, 45, 45, 0.90);
            width: 43vw;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 999;
            border-radius: 25px;
            visibility: hidden;
            opacity: 0;
            transition: 0.4s;
            &.show {
                visibility: visible;
                opacity: 1;
            }
            ul {
                display: block;
                height: auto;
                font-size: 4vw;
                font-weight: 700;
                padding: 15% 20%;
                li {
                    margin-bottom: 12%;
                }
                a {
                    height: auto;
                    line-height: 1.5;
                }
            }
        }
    }
}
.header-hidden {
    transform: translate(-50%, -200%) !important;
    opacity: 0;
}
</style>