<template>
    <footer>
        <div class="left">
            <div class="section">
                <div>主催</div>
                <div>米1グランプリ松江2024実行委員会</div>
            </div>
            <div class="section">
                <div>協力</div>
                <div>一般社団法人山陰飲食の会</div>
            </div>
            <div class="section">
                <div>後援</div>
                <div>松江市、島根県、松江商工会議所<br>
                    公益社団法人松江青年会議所、<br class="sp-only">松江市教育委員会</div>
            </div>
            <div class="section">
                <div>協賛</div>
                <div class="sponsor-logo">
                    <div class="sponsor">
                        <img src="/images/sponsor/jaShimane2.png" alt="sponsor" class="jaShimane">
                    </div>
                    <div class="sponsor">
                        <img src="/images/sponsor/toyosolar.png" alt="sponsor" class="toyosolar">
                    </div>
                    <div class="sponsor">
                        <img src="/images/sponsor/sapporo.png" alt="sponsor" class="sapporo">
                    </div>
                    <div class="sponsor">
                        <img src="/images/sponsor/itoen.png" alt="sponsor" class="itoen">
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="contact">
                <div>お問い合わせ</div>
                <a href="mailto:bei1matsue2024@gmail.com" class="mail">bei1matsue2024@gmail.com</a>
            </div>
            <div class="logo">
                <img src="/images/ft-logo.svg" alt="logo" class="ft-logo">
                <a href="" target="_blank">
                    <img src="/images/facebook.svg" alt="facebook">
                </a>
                <a href="https://www.instagram.com/bei1matsue/" target="_blank">
                    <img src="/images/instagram.svg" alt="instagram">
                </a>
                <a href="https://lin.ee/Q5reIsY" target="_blank">
                    <img src="/images/line.svg" alt="line">
                </a>
            </div>
        </div>
        <div class="copyright">Copyright 2024 米1グランプリ松江2024実行委員会</div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100%;
    background-color: #2D2D2D;
    color: white;
    padding: 5% 7vw;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    gap: 10%;
    position: relative;
    @media screen and (max-width: 767px) {
        display: block;
        padding: 10% 10vw 20%;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin-top: 15%;
    }
    .left {
        width: 40%;
        @media screen and (max-width: 767px) {
            width: auto;
        }
        .section {
            display: flex;
            gap: 7%;
            margin-bottom: 5%;
            font-size: clamp(13px, 1.1vw, 18px);
            white-space: nowrap;
            @media screen and (max-width: 767px) {
                font-size: 3vw;
            }
            .sponsor-logo {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 4%;
                width: 100%;
                @media screen and (max-width: 767px) {
                    flex-wrap: wrap;
                    gap: 7%;
                }
                .sponsor {
                    width: 13vw;
                    height: 4.5vw;
                    margin-bottom: 3%;
                    background-color: #fff;
                    position: relative;
                    img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    .jaShimane {
                        width: 80%;
                    }
                    .toyosolar {
                        width: 65%;
                    }
                    .sapporo {
                        width: 35%;
                    }
                    .itoen {
                        width: 80%;
                    }
                    @media screen and (max-width: 767px) {
                        margin-bottom: 5%;
                        width: 30vw;
                        height: 11vw;
                    }
                }
            }
        }
    }
    .right {
        .contact {
            font-size: clamp(11px, 1vw, 16px);
            @media screen and (max-width: 767px) {
                font-size: 3vw;
            }
            .mail {
                font-size: 2vw;
                color: white;
                font-family: "M PLUS Rounded 1c", sans-serif;
                font-weight: 800;
                @media screen and (max-width: 767px) {
                    font-size: 5.2vw;
                    margin-top: 6%;
                    display: block;
                }
            }
        }
        .logo {
            margin-top: 7%;
            display: flex;
            @media screen and (max-width: 767px) {
                gap: 1%;
            }
            .ft-logo {
                @media screen and (max-width: 767px) {
                    width: 40vw;
                    margin-right: 2%;
                }
            }
            a {
                height: auto;
                margin: auto 0 auto 3%;
                @media screen and (max-width: 767px) {
                    margin: 8% 0 auto 3%;
                    img {
                        width: 10vw;
                    }
                }
            }
        }
    }
    .copyright {
        position: absolute;
        bottom: 5%;
        right: 5%;
        font-size: clamp(9px, 1vw, 14px);
        @media screen and (max-width: 767px) {
            bottom: 6%;
            left: 10%;
            font-size: 2.8vw;
        }
    }
}

</style>