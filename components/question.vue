<template>
    <div class="question-container">
        <div class="title_e">Question</div>
        <div class="title_j">よくある質問</div>
        <div v-for="(item, index) in questions" :key="index" class="accordion"
            :style="{ maxHeight: getMaxHeight(index) }" @click="toggle(index)" :class="{ inview: item.inView }"
            ref="accordion">
            <div class="heading">{{ item.question }}</div>
            <div class="text" ref="content" :class="{ 'text-visible': item.show }">{{ item.answer }}</div>
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
                { question: '入場料は必要ですか？', answer: '入場料無料です。飲食代は別途必要です。また、IZUMO OROCHI FESの入場には有料のチケットが必要です。', show: false, inView: false },
                { question: '飲食物の持ち込みはできますか？', answer: '会場内販売以外の飲食物の会場への持ち込みはご遠慮ください。', show: false, inView: false },
                { question: 'チケットブースで使用できる決済方法は？', answer: '現金クレジット（VISA／Master／JCB／Amex／Diners／Discover）電子マネー（交通系／楽天Edy／nanaco／QUICPay）QR決済（PayPay／d払い／au PAY／メルペイ／J-Coin Pay／ゆうちょペイ／楽天ペイ／WeChatPay／Alipay）', show: false, inView: false },
                { question: 'お酒やソフトドリンクなどの飲みものも販売していますか？', answer: 'オフィシャルバーにてお酒・ソフトドリンクは販売しております。未成年による飲酒、及び飲酒運転は固くお断りいたします。なお、自転車も車両の一種（軽車両）ですので、ルールをお守りください。', show: false, inView: false },
                { question: '食事ができるところ、休憩できるところはありますか？', answer: 'テーブルや椅子の他、お食事していただけるスペースをご用意しております。', show: false, inView: false }
            ],
            accordions: ref([]),
            contentHeights: []
        };
    },
    mounted() {
        this.createObserver();
        this.calculateContentHeights();
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
        },
        calculateContentHeights() {
            nextTick(() => {
                this.$refs.accordion.forEach((accordion, index) => {
                    const content = accordion.querySelector('.text');
                    const isMobile = window.innerWidth <= 767;
                    const questionLength = this.questions[index].question.length;
                    const extraHeight = isMobile ? (questionLength >= 16 ? 90 : 70) : 60; // スマホで質問が15文字以上の場合、extraHeightを90に設定
                    this.contentHeights[index] = (content.scrollHeight + extraHeight) + 'px';
                });
            });
        },
        getMaxHeight(index) {
            const isMobile = window.innerWidth <= 767;
            const questionLength = this.questions[index].question.length;
            const baseHeight = isMobile ? (questionLength >= 16 ? '20vw' : '15vw') : '60px'; // スマホで質問が15文字以上の場合、baseHeightを30vwに設定
            return this.questions[index].show ? this.contentHeights[index] : baseHeight;
        }
    },
    setup() {
        const addInviewClass = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('inview');
                }
            });
        };

        const observer = new IntersectionObserver(addInviewClass);

        onMounted(() => {
            const elementsToObserve = document.querySelectorAll('.title_e, .title_j');
            elementsToObserve.forEach(el => observer.observe(el));
        });
    }
};
</script>

<style lang="scss" scoped>
.question-container {
    max-width: 1150px;
    width: 66vw;
    margin: auto;
    margin-bottom: 5%;
    @media screen and (max-width: 767px) {
        width: 85vw;
    }
    .title_e {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: clamp(18px, 1.6vw, 24px);
        @media screen and (max-width: 767px) {
            font-size: 5vw;
        }
        transition: transform 0.6s;
        opacity: 0;
        transform: translateY(50px);
        transition-delay: transform 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .title_j {
        font-weight: 800;
        font-size: clamp(24px, 2vw, 32px);
        margin-top: 4%;
        @media screen and (max-width: 767px) {
            font-size: 8vw;
        }
        transition: transform 0.6s;
        opacity: 0;
        transform: translateY(50px);
        transition-delay: transform 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .accordion {
        background-color: #FFDD55;
        margin-top: 2%;
        border-radius: 40px;
        padding: 1% 5%;
        transition: max-height 0.2s ease-out, background-color 0.2s, color 0.2s, transform 0.6s;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        @media screen and (max-width: 767px) {
            padding: 4vw 16% 4vw 10%;
            border-radius: 30px;
            margin-top: 7%;
        }
        .heading {
            font-size: clamp(22px, 1.8vw, 28px);
            font-weight: 800;
            @media screen and (max-width: 767px) {
                font-size: 4vw;
            }
        }
        .text {
            font-size: clamp(12px, 1vw, 17px);
            padding-right: 2%;
            visibility: hidden;
            @media screen and (max-width: 767px) {
                font-size: 3vw;
                margin-top: 5%;
            }
            &.text-visible {
                visibility: visible;
            }
        }
        @media screen and (min-width: 768px) {
            &:hover {
                background-color: #2D2D2D;
                color: #fff;
            }
        }
        .arrow {
            position: absolute;
            top: 30%;
            right: 3%;
            transition: all 0.2s;
            @media screen and (max-width: 767px) {
                top: 50%;
                right: 9%;
                width: 6%;
                transform: translateY(-50%);
            }
        }
        .arrow-rotated {
            transform: translateY(-50%) rotate(-90deg);
            @media screen and (max-width: 767px) {
                transform: translateY(-50%) rotate(-90deg);
                top: 10vw;
            }
        }
        @media screen and (min-width: 768px) {
            &:hover .arrow {
                filter: brightness(10);
            }
            &:hover .arrow {
                filter: brightness(10);
            }
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