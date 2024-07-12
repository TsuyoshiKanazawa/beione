<template>
    <div class="consept-conatiner">
        <div class="text-container">
            <div class="title">Consept</div>
            <div class="copy">
                お米で地方から<br>
                日本を元気に！
            </div>
            <div class="text">
                米1グランプリは、過去に島根県奥出雲町で開催され、<br>
                1日に1万人以上が訪れた大人気のお米イベント。<br>
                お米や米粉を使ったここでしか食べられない<br>
                こだわりのメニューを食べ比べ、<br>
                来場者の投票でナンバーワンを決める、<br>
                お祭りのように楽しく、真剣な食イベント！<br>
                お米のおいしさをみんなで共有し合い、<br>
                その素晴らしさを地方から日本に広げていこう！
            </div>
        </div>
        <img src="/images/consept.png" alt="consept image">
    </div>
</template>

<style lang="scss" scoped>
.consept-conatiner {
    display: flex;
    justify-content: center;
    gap: 3%;
    margin-top: 10%;
    .text-container {
        font-weight: 700;
        .title {
            font-family: "Roboto", sans-serif;
            font-size: clamp(14px, 1.5vw, 24px);
        }
        .copy {
            font-size: clamp(33px, 3vw, 55px);
            margin-top: 4%;
        }
        .text {
            font-size: clamp(14px, 1.5vw, 24px);
            margin-top: 5%;
            line-height: 2.3;
        }
    }
    img {
        max-width: 479px;
        min-width: 306px;
        width: 33vw;
    }
}
</style>