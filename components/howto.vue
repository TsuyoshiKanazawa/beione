<template>
    <div class="howto-conatiner">
        <div class="text-container">
            <div class="title">How to enjoy BEI-ONE GP</div>
            <div class="text">
                米1グランプリ<br>
                松江の<br>
                楽しみ方
            </div>
        </div>
        <div class="step-container">
            <div class="section">
                <div class="step">
                    STEP<br>
                    <div class="large">1</div>
                </div>
                <div class="exp">
                    <div class="text">飲食チケットを購入</div>
                    <div class="small">※各ブースでの直接のお支払はできません！</div>
                </div>
            </div>
            <div class="section">
                <div class="step">
                    STEP<br>
                    <div class="large">2</div>
                </div>
                <div class="exp">
                    <div class="text">チケット購入で投票用紙をゲット</div>
                    <div class="small">※500円購入ごとに1枚の投票用紙をお渡しします！</div>
                </div>
            </div>
            <div class="section">
                <div class="step">
                    STEP<br>
                    <div class="large">3</div>
                </div>
                <div class="exp">
                    <div class="text">お気に入りのお店を探す</div>
                    <div class="small">※ステージイベントや企業PRブースも楽しみながら！</div>
                </div>
            </div>
            <div class="section">
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

<style lang="scss" scoped>
.howto-conatiner {
    display: flex;
    justify-content: center;
    gap: 7%;
    margin-top: 10%;
    .text-container {
        font-weight: 700;
        .title {
            font-family: "Roboto", sans-serif;
            font-size: clamp(14px, 1.8vw, 24px);
        }
        .text {
            font-size: clamp(33px, 4vw, 55px);
            line-height: 1.3;
            margin-top: 5%;
        }
    }
    .step-container {
        margin-top: -4%;
        .section {
            display: flex;
            justify-content: flex-start;
            gap: 3%;
            width: 32vw;
            margin-top: 4%;
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
                    margin-top: 2%;
                }
            }
            .exp {
                .text {
                    font-weight: 700;
                    font-size: clamp(18px, 1.6vw, 28px);
                    margin-top: 2%;
                }
                .small {
                    font-weight: 400;
                    font-size: clamp(8px, 1vw, 16px);
                }
            }
        }
    }
}
</style>