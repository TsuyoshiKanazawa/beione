<template>
    <header>
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
    font-family: "Noto Sans JP", sans-serif;
    display: flex;
    justify-content: flex-start;
    padding-left: 4%;
    box-sizing: border-box;
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
    @media screen and (max-width: 767px) {
        
    }
</style>