<template>
    <div>
        <div class="top">
            <img src="/images/logo.svg" alt="logo" class="logo">
            <img src="/images/title.svg" alt="logo" class="top-title">
            <img src="/images/kv.png" alt="logo" class="kv">
            <div class="top-overview">
                <div class="section">
                    <div class="subject">〈開催日時〉</div>
                    <div class="text">2024年<br>
                        9月7日(土) 11:00～18:00<br>
                        9月8日(日) 11:00～17:00</div>
                </div>
                <div class="section">
                    <div class="subject">〈開催場所〉</div>
                    <div class="text">松江市総合体育館 駐車場</div>
                </div>
                <div class="section">
                    <div class="subject">〈入場料〉</div>
                    <div class="text">無料</div>
                </div>
            </div>
        </div>
        <shopInfo />
        <shopInfo />
        <shopInfo />
    </div>
</template>

<style lang="scss" scoped>
.top {
    position: relative;
    overflow: hidden;
    .logo {
        width: 30vw;
        margin: 4% 90% 0 6%;
    }
    .top-title {
        width: 19vw;
        margin: 2% 0 0 9%;
    }
    .kv {
        width: 65vw;
        position: absolute;
        top: 10vw;
        right: 0;
    }
    .top-overview {
        font-weight: 800;
        margin-left: 10%;
        margin-top: 5%;
        .section {
            display: flex;
            margin-bottom: 1%;
            .subject {
                font-size: 1vw;
                width: 7vw;
                line-height: 2.5;
            }
            .text {
                font-size: 2vw;
            }
        }
    }
}

</style>