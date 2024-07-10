<template>
    <div class="top">
        <div class="top-visual">
            <img src="/images/logo.svg" alt="logo" class="logo">
            <div style="width: fit-content;">
                <img src="/images/title.svg" alt="title" class="top-title">
                <img src="/images/jaShimane.svg" alt="sponsorship" class="ja-shimane">
                <div class="top-overview">
                    <div class="section">
                        <div class="subject">〈開催日時〉</div>
                        <div class="text">
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
        </div>

    </div>
</template>

<style lang="scss" scoped>
.top {
    position: relative;
    overflow: hidden;
    padding-top: 180px;
    font-family: "Noto Sans JP", sans-serif;

    .top-visual {
        display: flex;
        justify-content: center;
        gap: 2%;

        .logo {
            max-width: 603px;
            width: 45vw;
        }

        .top-title {
            max-width: 488px;
            width: 37vw;
            margin: -2% 0 0 0;
        }

        .ja-shimane {
            max-width: 361px;
            width: 27vw;
            display: block;
            margin-top: 3%;
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
    }
}
</style>