<template>
    <div class="shop-info">
        <svg width="0" height="0">
            <defs>
                <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0.5 1 C0.1 1 0 0.75 0 0.5 C0 0.25 0.1 0 0.5 0 C0.9 0 1 0.25 1 0.5 C1 0.75 0.9 1 0.5 1" />
                </clipPath>
            </defs>
        </svg>
        <div class="title sp-only" ref="selectSp">Shop Info</div>
        <div class="splide-container" ref="select">
            <div class="title pc-only">Shop Info</div>
            <div class="select-wrapper" ref="selectWrapper" :data-open="isFocused">
                <select name="select" id="select" v-model="selectedDay" @click="onClick" @blur="onBlur">
                    <option value="全日">全日</option>
                    <option value="9/7(土)">土曜日</option>
                    <option value="9/8(日)">日曜日</option>
                </select>
                <img src="/images/selectArrow.svg" alt="arrow" class="selectArrow">
            </div>
            <hr />
            <button class="splide__arrow splide__arrow--prev" @click="goPrev"></button>
            <button class="splide__arrow splide__arrow--next" @click="goNext"></button>
        </div>
        <Splide :options="options" class="shop-info-list" ref="splide">
            <SplideSlide v-for="(content, index) in filteredContents" :key="index">
                <div class="shop">
                    <svg width="100%" height="24%" viewBox="0 0 350 250" style="margin: auto; display: block;">
                        <image :href="content.image.src" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
                            clip-path="url(#clip-path)" v-if="content.image && content.image.src" />
                        <image href="/images/noImage.jpg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
                            clip-path="url(#clip-path)" v-else />
                    </svg>
                    <div class="day-container">
                        <div v-for="(day) in content.day" :key="day" class="day" :class="getClassForDay(day)">
                            {{ day }}
                        </div>
                    </div>
                    <div class="name">{{ content.name }}</div>
                    <div class="detail">{{ content.storeDetail }}</div>
                    <svg width="100%" height="24%" viewBox="0 0 350 250" style="margin: auto; display: block;">
                        <image :href="content.menuImage.src" width="100%" height="100%"
                            preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" v-if="content.menuImage && content.menuImage.src" />
                        <image href="/images/noImage.jpg" width="100%" height="100%"
                            preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-path)" v-else />
                    </svg>
                    <div class="name">{{ content.menuName }}</div>
                    <div class="detail">{{ content.menuDetail }}</div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';

export default {
    components: {
        Splide,
        SplideSlide
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
            const elementsToObserve = document.querySelectorAll('.splide-container, .shop-info-list, .title.sp-only');
            elementsToObserve.forEach(el => observer.observe(el));
        });

        const splide = ref(null);
        const selectedDay = ref('全日');
        const isFocused = ref(false);

        const options = {
            type: 'slide',
            rewind: true,
            perPage: 4,
            perMove: 1,
            pagination: false,
            arrows: false,
            gap: '40px',
            speed: 600,
            breakpoints: {
                767: {
                    perPage: 1,
                    gap: '13px',
                    padding: { left: '12%' },
                },
            },
            classes: {
                arrow: 'splide__arrow',
                prev: 'splide__arrow--prev',
                next: 'splide__arrow--next',
            },
            padding: { left: '15%' },
        };

        const goPrev = () => {
            splide.value.go('<');
        };

        const goNext = () => {
            splide.value.go('>');
        };

        const newtContents = ref([]);
        onMounted(async () => {
            const { $newtClient } = useNuxtApp();
            const response = await $newtClient.getContents({
                appUid: 'landingPage',
                modelUid: 'vendor',
                query: {
                    select: ['image', 'day', 'name', 'storeDetail', 'menuImage', 'menuName', 'menuDetail'],
                    order: ['-_sys.customOrder']
                }
            });
            newtContents.value = response;
            //console.log(newtContents.value.items[0].image.src)
        });

        const filteredContents = computed(() => {
            if (selectedDay.value === '全日') {
                return newtContents.value.items;
            }
            return newtContents.value.items.filter((content) =>
                content.day.includes(selectedDay.value)
            );
        });
        console.log(filteredContents)
        const getClassForDay = (day) => {
            if (day.includes('9/7(土)')) {
                return 'saturday';
            } else if (day.includes('9/8(日)')) {
                return 'sunday';
            }
            return '';
        };

        const onClick = () => {
            if (isFocused.value) {
                isFocused.value = false;
                return
            } else {
                console.log(isFocused.value)
                isFocused.value = true;
                return
            }
        };

        const onBlur = () => {
            isFocused.value = false;
        };

        return {
            options,
            splide,
            goPrev,
            goNext,
            newtContents,
            getClassForDay,
            filteredContents,
            selectedDay,
            isFocused,
            onBlur,
            onClick
        };
    }
};
</script>

<style lang="scss" scoped>
.shop-info {
    margin-bottom: 1%;
    .title.sp-only {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 4vw;
        margin-left: 7%;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .splide-container {
        margin: 3% 0 3% 15%;
        position: relative;
        display: flex;
        gap: 1%;
        @media screen and (max-width: 767px) {
            margin: 3% 0 3% 12%;
            justify-content: space-between;
            gap: 4%;
            padding-right: 10%;
        }
        .title {
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: clamp(14px, 1.5vw, 20px);
            margin-right: 1%;
            line-height: 1.5;
        }

        .select-wrapper {
            position: relative;
            transition: 0.2s;
            max-height: 29px;

            &[data-open="true"] select {
                background-color: #2D2D2D;
                color: #fff;
            }

            &[data-open="true"] {
                .selectArrow {
                    filter: brightness(10);
                }
            }

            @media screen and (min-width: 768px) {
                &:hover {
                    .selectArrow {
                        filter: brightness(10);
                    }
                }
                &:hover select {
                    background-color: #2D2D2D;
                    color: #fff;
                }
            }

            .selectArrow {
                position: absolute;
                top: 0;
                right: 9%;
                margin-top: 8%;
                pointer-events: none;
                transition: 0.2s;
                width: 20%;
                @media screen and (max-width: 767px) {
                    margin-top: 11%;
                }
            }

            & select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                font-family: "Noto Sans JP", sans-serif;
                background-color: #FFDD55;
                font-weight: 800;
                color: #2D2D2D;
                font-size: clamp(14px, 1.5vw, 20px);
                padding-left: 12%;
                padding-right: 0;
                border: none;
                border-radius: 70px;
                width: 8vw;
                max-width: 110px;
                min-width: 94px;
                min-height: 24px;
                transition: 0.2s;
                cursor: pointer;
                @media screen and (max-width: 767px) {
                    width: 8vw;
                    min-width: 80px;
                }
            }
        }

        hr {
            height: 0.15vw;
            width: 60%;
            border: none;
            background-color: #2D2D2D;
            margin: auto 0;
            @media screen and (max-width: 767px) {
                opacity: 0;
                width: 50vw;
            }
        }

        .splide__arrow {
            position: static;
            width: 2vw;
            height: 2vw;
            max-width: 29px;
            max-height: 29px;
            min-width: 24px;
            min-height: 24px;
            background-color: #FFDD55;
            border: none;
            font-size: 1vw;
            cursor: pointer;
            z-index: 1;
            opacity: 1;
            transform: none;
            transition: background-color 0.2s, color 0.2s;

            &.splide__arrow--prev::after,
            &.splide__arrow--next::after {
                content: "";
                display: inline-block;
                vertical-align: middle;
                color: #2D2D2D;
                width: 45%;
                height: 45%;
                border: 0.2vw solid currentColor;
                box-sizing: border-box;
                @media screen and (max-width: 767px) {
                    border: 2px solid currentColor;
                    margin-left: 5%;
                }
            }

            &.splide__arrow--prev::after {
                border-right: 0;
                border-bottom: 0;
                transform: translateX(25%) rotate(-45deg);
                transition: 0.2s;
            }

            &.splide__arrow--next::after {
                border-left: 0;
                border-bottom: 0;
                transform: translateX(-25%) rotate(45deg);
                transition: 0.2s;
            }
            @media screen and (min-width: 768px) {
                &:hover {
                    background-color: #2D2D2D;
                    &.splide__arrow--prev::after,
                    &.splide__arrow--next::after {
                        color: #fff;
                    }
                }
            }

        }
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .shop-info-list {
        width: 100%;
        .shop {
            background-color: #FFECBB;
            max-width: 307px;
            min-width: 252px;
            width: 21vw;
            max-height: 790px;
            min-height: 630px;
            height: 53vw;
            border-radius: 20px;
            padding: 7%;
            box-sizing: border-box;
        }
        .day-container {
            display: flex;
            justify-content: center;
            gap: 5%;
            font-size: clamp(8px, 0.9vw, 10px);
            text-align: center;
            line-height: clamp(15px, 1vw, 19px);
            margin: 4% 0 3%;
            font-weight: 700;
            .day {
                width: 5vw;
                max-width: 71px;
                min-width: 60px;
                height: 1.4vw;
                max-height: 19px;
                min-height: 15px;
                border-radius: 23px;
            }
            .saturday {
                background-color: #4D7DB5;
            }
            .sunday {
                background-color: #DE5151;
            }
        }
        .name {
            font-size: clamp(18px, 1.6vw, 24px);
            font-family: "M PLUS Rounded 1c", sans-serif;
            font-weight: 800;
        }
        .detail {
            font-size: clamp(12px, 1vw, 14px);
            font-family: "M PLUS Rounded 1c", sans-serif;
            font-weight: 400;
            margin-bottom: 7%;
            height: 133px;

        }
        opacity: 0;
        transition: 0.6s;
        transform: translateY(50px);
        transition-delay: 0.2s;
        &.inview {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .shop-info-list .splide__slide {
        width: auto !important;
        transition: transform 0.6s ease-in-out;
    }
}
</style>
