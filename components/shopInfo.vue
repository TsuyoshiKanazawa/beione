<template>
    <div class="shop-info">
        <div class="splide-container">
            <div class="title">Shop Info</div>
            <div class="select-wrapper">
                <select name="select" id="select">
                    <option value="全日">全日</option>
                    <option value="9/7(土)">9/7(土)</option>
                    <option value="9/8(日)">9/8(日)</option>
                </select>
            </div>
            <hr />
            <button class="splide__arrow splide__arrow--prev" @click="goPrev"></button>
            <button class="splide__arrow splide__arrow--next" @click="goNext"></button>
        </div>
        <Splide :options="options" class="shop-info-list" ref="splide">
            <SplideSlide>
                <div class="shop">
                    <div class="mold-container">
                        <svg width="244" height="172" viewBox="0 0 244 172" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="clip-path">
                                    <path
                                        d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z" />
                                </clipPath>
                            </defs>
                            <path
                                d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z"
                                fill="white" />
                        </svg>
                        <img src="/images/damy.jpg" alt="Damy" class="damy">
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">
                    <div class="mold-container">
                        <svg width="244" height="172" viewBox="0 0 244 172" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="clip-path">
                                    <path
                                        d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z" />
                                </clipPath>
                            </defs>
                            <path
                                d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z"
                                fill="white" />
                        </svg>
                        <img src="/images/damy.jpg" alt="Damy" class="damy">
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">
                    <div class="mold-container">
                        <svg width="244" height="172" viewBox="0 0 244 172" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="clip-path">
                                    <path
                                        d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z" />
                                </clipPath>
                            </defs>
                            <path
                                d="M122 171.996C21.4195 171.996 0 133.493 0 86C0 38.5071 21.4195 0 122 0C222.58 0 244 38.5027 244 86C244 133.497 222.58 172 122 172V171.996Z"
                                fill="white" />
                        </svg>
                        <img src="/images/damy.jpg" alt="Damy" class="damy">
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">

                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">

                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">

                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="shop">

                </div>
            </SplideSlide>
        </Splide>
    </div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { ref } from 'vue';

export default {
    components: {
        Splide,
        SplideSlide
    },
    setup() {
        const splide = ref(null);
        const options = {
            type: "slide",
            rewind: true,
            perPage: 4,
            perMove: 1,
            pagination: false,
            arrows: false,
            breakpoints: {
                640: {
                    perPage: 1,
                },
            },
            classes: {
                arrow: 'splide__arrow',
                prev: 'splide__arrow--prev',
                next: 'splide__arrow--next',
            },
        };
        const goPrev = () => {
            splide.value.go('<');
        };

        const goNext = () => {
            splide.value.go('>');
        };
        return { options, splide, goPrev, goNext };
    },
    mounted() {
        const selectElement = document.getElementById('select');

        selectElement.addEventListener('click', () => {
            selectElement.parentElement.classList.toggle('dropdown-open');
        });

        selectElement.addEventListener('blur', () => {
            selectElement.parentElement.classList.remove('dropdown-open');
        });
    },
};

</script>

<style lang="scss" scoped>
.shop-info {
    margin-left: 10%;
    margin-bottom: 5%;
    overflow: hidden;

    .shop-info-list {
        width: 95vw;

        .shop {
            background-color: #FFECBB;
            width: 21vw;
            height: 53vw;
            border-radius: 20px;
        }
        .mold-container {
            position: relative;
            display: inline-block;
        }

        .mold-container img.mold {
            display: block;
        }

        .mold-container img.damy {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: url(#clip-path);
        }
    }

    .splide-container {
        margin: 3% 0;
        position: relative;
        display: flex;
        gap: 1%;
        .title {
            font-family: "Cormorant Garamond", serif;
            font-weight: 800;
            font-size: 1.7vw;
            margin-right: 3%;
        }
        .select-wrapper {
            position: relative;
            display: inline-block;
            width: 9.5vw;
            &::after {
                content: '';
                position: absolute;
                top: 35%;
                right: 12%;
                width: 1vw;
                height: 1vw;
                border: solid white;
                border-width: 0 0.15em 0.15em 0;
                transform: translateY(-50%) rotate(45deg);
                pointer-events: none;
                transition: 0.2s;
            }
            & select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: #2D2D2D;
                font-weight: 800;
                color: #fff;
                font-size: 1.5vw;
                padding-left: 12%;
                border: none;
                border-radius: 70px;
                width: 100%;
                padding-right: 2em;
            }
            &.dropdown-open::after {
                transition: 0.2s;
                transform: translateY(0%) rotate(225deg);
            }
        }
        hr {
            height: 3px;
            width: 68%;
            border: none;
            background-color: #2D2D2D;
            margin-top: 1%;
        }
        .splide__arrow {
            position: static;
            width: 2vw;
            height: 2vw;
            background-color: #2D2D2D;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            z-index: 1;
            opacity: 1;
            transform: none;

            &--prev {
                &::after {
                    content: "";
                    display: inline-block;
                    vertical-align: middle;
                    color: #fff;
                    line-height: 1;
                    width: 45%;
                    height: 45%;
                    border: 0.2rem solid currentColor;
                    border-right: 0;
                    border-bottom: 0;
                    box-sizing: border-box;
                    transform: translateX(25%) rotate(-45deg);
                }
            }

            &--next {
                &::after {
                    content: "";
                    display: inline-block;
                    vertical-align: middle;
                    color: #fff;
                    line-height: 1;
                    width: 45%;
                    height: 45%;
                    border: 0.2rem solid currentColor;
                    border-left: 0;
                    border-bottom: 0;
                    box-sizing: border-box;
                    transform: translateX(-25%) rotate(45deg);
                }
            }
        }
    }
}
</style>