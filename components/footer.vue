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
                    公益社団法人松江青年会議所、松江市教育委員会</div>
            </div>
            <div class="section">
                <div>協賛</div>
                <div class="sponsor-logo">
                    <div class="sponsor"></div>
                    <div class="sponsor"></div>
                    <div class="sponsor"></div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="contact">
                <div>お問い合わせ</div>
                <a href="mailto:bei1matsue2024@gmail.com" class="mail">bei1matsue2024@gmail.com</a>
            </div>
            <div class="logo">
                <img src="/images/ft-logo.svg" alt="logo">
                <a href="">
                    <img src="/images/facebook.svg" alt="facebook">
                </a>
                <a href="">
                    <img src="/images/instagram.svg" alt="instagram">
                </a>
                <a href="">
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
    .left {
        width: 40%;
        .section {
            display: flex;
            gap: 7%;
            margin-bottom: 5%;
            font-size: clamp(13px, 1.1vw, 18px);
            white-space: nowrap;
            .sponsor-logo {
                display: flex;
                justify-content: flex-start;
                gap: 4%;
                width: 100%;
                .sponsor {
                    width: 120px;
                    height: 70px;
                    background-color: #D9D9D9;
                }
            }
        }
    }
    .right {
        .contact {
            font-size: clamp(11px, 1vw, 16px);
            .mail {
                font-size: 2vw;
                color: white;
                font-family: "M PLUS Rounded 1c", sans-serif;
                font-weight: 800;
            }
        }
        .logo {
            margin-top: 7%;
            display: flex;
            a {
                height: auto;
                margin: auto 0 auto 3%;
            }
        }
    }
    .copyright {
        position: absolute;
        bottom: 5%;
        right: 5%;
        font-size: clamp(9px, 1vw, 14px);
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
}

</style>