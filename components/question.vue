<template>
    <div class="question-container">
        <div class="title_e">Question</div>
        <div class="title_j">よくある質問</div>
        <div v-for="(item, index) in questions" :key="index" class="accordion" @click="toggle(index)"
            :class="{ inview: item.inView }" ref="accordion">
            <div class="heading">{{ item.question }}</div>
            <div v-if="item.show" class="text">{{ item.answer }}</div>
            <img :class="{ 'arrow': true, 'arrow-rotated': item.show }" src="/images/accordionArrow.svg" alt="arrow" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';

export default {
    data() {
        return {
            questions: [
                { question: '雨天でも開催されますか？', answer: '雨天決行ですが、荒天の場合は中止となる場合もございます。荒天、自然災害が生じた場合の開催の有無は、公式サイトや公式SNSにてお知らせ致します。', show: false, inView: false },
                { question: '入場料は必要ですか？', answer: '入場料無料です。飲食代は別途必要です。', show: false, inView: false },
                { question: '飲食物の持ち込みはできますか？', answer: '会場内販売以外の飲食物の会場への持ち込みはご遠慮ください。', show: false, inView: false },
                { question: 'チケットブースで使用できる決済方法は？', answer: '現金クレジット（VISA／Master／JCB／Amex／Diners／Discover）電子マネー（交通系／楽天Edy／WAON／nanaco／iD／ QUICPay）QR決済（PayPay／d払い／au PAY／メルペイ／J- Coin Pay／ゆうちょペイ／楽天ペイ／WeChatPay／Alipay）', show: false, inView: false },
                { question: 'お酒やソフトドリンクなどの飲みものも販売していますか？', answer: 'オフィシャルバーにてお酒・ソフトドリンクは販売しております。未成年による飲酒、及び飲酒運転は固くお断りいたします。なお、自転車も車両の一種（軽車両）ですので、ルールをお守りください。', show: false, inView: false },
                { question: '食事ができるところ、休憩できるところはありますか？', answer: 'テーブルや椅子の他、レジャーシートを敷いてお食事していただけるスペースをご用意しております。', show: false, inView: false }
            ],
            accordions: ref([])
        };
    },
    mounted() {
        this.createObserver();
    },
    methods: {
        toggle(index) {
            this.questions[index].show = !this.questions[index].show;
        },
        createObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const observer = new IntersectionObserver(this.handleIntersect, options);
            nextTick(() => {
                this.accordions = this.$refs.accordion;
                this.accordions.forEach((accordion) => {
                    observer.observe(accordion);
                });
            });
        },
        handleIntersect(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = this.accordions.indexOf(entry.target);
                    if (index !== -1) {
                        this.questions[index].inView = true;
                    }
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.question-container {
    max-width: 1150px;
    width: 66vw;
    margin: auto;
    font-family: "M PLUS Rounded 1c", sans-serif;
    margin-bottom: 5%;
    .title_e {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: clamp(18px, 1.6vw, 24px);
    }
    .title_j {
        font-weight: 800;
        font-size: clamp(24px, 2vw, 32px);
        margin-top: 4%;
    }
    .accordion {
        background-color: #FFDD55;
        margin-top: 2%;
        border-radius: 40px;
        padding: 1% 5%;
        transition: background-color 0.2s, color 0.2s, transform 0.6s;
        position: relative;
        cursor: pointer;
        .heading {
            font-size: clamp(22px, 1.8vw, 28px);
            font-weight: 800;
        }
        .text {
            font-size: clamp(12px, 1vw, 17px);
            padding-right: 2%;
        }
        &:hover {
            background-color: #2D2D2D;
            color: #fff;
        }
        .arrow {
            position: absolute;
            top: 30%;
            right: 3%;
            transition: all 0.2s;
        }
        .arrow-rotated {
            transform: translateY(-50%) rotate(-90deg);
        }
        &:hover .arrow {
            filter: brightness(10);
        }
        &:hover .arrow {
            filter: brightness(10);
        }
        opacity: 0;
        transform: translateY(50px);
        transition-delay: transform 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>