<template>
	<section class="hero">
		<div class="container hero__container">
			<HeroFilters @update-slider="updateSlider" />
			<div class="hero__table">
				<div class="hero__header">
					<div class="hero__row">
						<div class="hero__cell hero__cell-header hero__cell-header-name hero__col-name">Имя</div>
						<div class="hero__cell hero__cell-header hero__col-phone">Телефон</div>
						<div class="hero__cell hero__cell-header hero__col-job">Должность</div>
						<div class="hero__cell hero__cell-header hero__col-vacancy">Вакансия</div>
						<div class="hero__cell hero__cell-header hero__col-salary">ЗП</div>
						<div class="hero__cell hero__cell-header hero__col-city">Город</div>
						<div class="hero__cell hero__cell-header hero__col-link">Ссылка</div>
						<div class="hero__cell hero__cell-header hero__cell-header-crm hero__col-crm">CRM</div>
						<div class="hero__cell hero__cell-header hero__cell-header-hide hero__col-hide">Скрыть</div>
					</div>
				</div>
				<div class="hero__body swiper">
					<div class="swiper-wrapper hero__wrapper-main">
						<div class="swiper-slide" v-for="(slide, idx) in this.$store.state.preparedSlides" :key="idx">
							<div class="hero__row" v-for="(row, idx) in slide" :key="idx">
								<div class="hero__cell hero__col-name">{{ row.name }} {{ row.id }}</div>
								<div class="hero__cell hero__col-phone">
									<a href="tel:+79080788723">{{ row.phone }}</a>
								</div>
								<div class="hero__cell hero__col-job">{{ row.job }}</div>
								<div class="hero__cell hero__col-vacancy">{{ row.vacancy }}</div>
								<div class="hero__cell hero__col-salary">{{ row.salary }}</div>
								<div class="hero__cell hero__col-city">{{ row.city }}</div>
								<div class="hero__cell hero__col-link"><a href="#">Перейти</a></div>
								<div class="hero__cell hero__col-crm">
									<a class="hero__container-button">
										<svg class="hero__icon-plus">
											<use xlink:href="../img/sprite.svg#plus"></use>
										</svg>
										<span class="hero__text-crm">CRM</span>
									</a>
								</div>
								<div class="hero__cell hero__col-hide">
									<svg class="hero__icon-minus">
										<use xlink:href="../img/sprite.svg#minus"></use>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="hero__footer">
					<p class="hero__text-all hero__text-footer">
						Всего:
						<span class="hero__text-footer hero__text-all-value">{{ $store.state.rowsData.length }}</span>
					</p>
					<div class="hero__text-pages hero__text-footer">
						<span class="hero__text-page">
							Страницы:
							<span
								class="hero__text-page"
								v-if="$store.state.rowsPerSlide >= this.$store.state.rowsData.length"
								>1</span
							>
						</span>
						<button
							class="btn-reset hero__button-control hero__button-prev"
							v-if="$store.state.rowsPerSlide < this.$store.state.rowsData.length"
						>
							Пред
						</button>
						<div class="swiper hero__slider-pagination">
							<div
								class="hero__pagination swiper-wrapper"
								v-if="$store.state.rowsPerSlide < this.$store.state.rowsData.length"
							></div>
						</div>
						<button
							class="btn-reset hero__button-control hero__button-next"
							v-if="$store.state.rowsPerSlide < this.$store.state.rowsData.length"
						>
							След.
						</button>
						<button
							class="btn-reset hero__button-control hero__button-last"
							v-if="$store.state.rowsPerSlide < this.$store.state.rowsData.length"
						>
							Последняя
						</button>
					</div>
					<p class="hero__text-onpage hero__text-footer">
						На странице:
						<select class="hero__select" v-model="$store.state.rowsPerSlide">
							<option v-for="(item, idx) in $store.state.pageCountOptions" :key="idx" :value="item">
								{{ item }}
							</option>
						</select>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import HeroFilters from "./HeroFilters.vue";
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css/bundle";

export default {
	name: "HeroMain",
	data() {
		return {
			mainSlider: null,
		};
	},
	components: { HeroFilters },
	methods: {
		makeSlider() {
			const bulletsSliderElement = document.querySelector(".hero__slider-pagination");
			const bulletsSlider = new Swiper(bulletsSliderElement, {
				slidesPerView: 3,
				speed: 600,
				spaceBetween: 26,
				clickable: true,
				centeredSlides: true,
				navigation: {
					nextEl: ".hero__button-next",
					prevEl: ".hero__button-prev",
				},
			});
			bulletsSlider.activeIndex = 1;

			this.mainSlider = new Swiper(document.querySelector(".hero__body"), {
				slidesPerView: 1,
				speed: 700,
				modules: [Navigation, Pagination, Thumbs],
				pagination: {
					el: ".hero__pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="hero__bullet swiper-slide ${className}">${index + 1}</span>`;
					},
				},
				navigation: {
					nextEl: ".hero__button-next",
					prevEl: ".hero__button-prev",
				},
				thumbs: {
					swiper: bulletsSlider,
				},
			});

			const lastButton = document.querySelector(".hero__button-last");
			lastButton.addEventListener("click", () => {
				this.mainSlider.slideTo(
					document.querySelector(".hero__wrapper-main").querySelectorAll(".swiper-slide").length - 1,
					1000
				);
			});
		},
		makeHovers() {
			const names = document.querySelectorAll(".hero__col-name");
			const phones = document.querySelectorAll(".hero__col-phone");
			const jobs = document.querySelectorAll(".hero__col-job");
			const vacancy = document.querySelectorAll(".hero__col-vacancy");
			const salaries = document.querySelectorAll(".hero__col-salary");
			const cities = document.querySelectorAll(".hero__col-city");
			const links = document.querySelectorAll(".hero__col-link");
			const crms = document.querySelectorAll(".hero__col-crm");
			const hides = document.querySelectorAll(".hero__col-hide");

			const cols = [names, phones, jobs, vacancy, salaries, cities, links, crms, hides];

			for (let i = 0; i < cols.length; i++) {
				cols[i].forEach((hoverElement) => {
					hoverElement.onmouseenter = () => {
						cols[i].forEach((el) => {
							el.classList.add("hero__cell-hovered");
						});
						if (cols[i - 1]) {
							cols[i - 1][0].classList.add("hero__cell-header-hide-after");
						}
						if (cols[i]) {
							cols[i][0].classList.add("hero__cell-header-hide-after");
						}
					};
					hoverElement.onmouseleave = () => {
						cols[i].forEach((el) => {
							el.classList.remove("hero__cell-hovered");
						});
						if (cols[i - 1]) {
							cols[i - 1][0].classList.remove("hero__cell-header-hide-after");
						}
						if (cols[i]) {
							cols[i][0].classList.remove("hero__cell-header-hide-after");
						}
					};
				});
			}
		},
		updateSlider() {
			this.mainSlider.slideTo(0, 1000);
			this.makeSlider();
		},
	},
	mounted() {
		this.$store.commit("makePreparedSlides");
		if (this.$store.state.rowsPerSlide < this.$store.state.rowsData.length) {
			this.makeSlider();
		}
		setTimeout(() => {
			this.makeHovers();
		}, 0);
	},
	computed: {
		rowsPerSlide() {
			return this.$store.state.rowsPerSlide;
		},
	},
	watch: {
		rowsPerSlide() {
			this.mainSlider.slideTo(0, 1000);
			this.$store.commit("clearPreparedSlides");
			// if (this.$store.state.currentFilters.length > 0) {
			this.$store.commit("makeFilteredSlides");
			// } else {
			// 	this.$store.commit("makePreparedSlides");
			// }
			this.makeSlider();
		},
	},
};
</script>

<style lang="scss">
.swiper-pagination-bullet-active {
	color: var(--blue-color);
}
.hero {
	padding-top: 50px;
	padding-bottom: 50px;
	&__container {
		&-button {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 2px;
			padding-left: 4px;
			padding-right: 11px;
			border: 1px solid var(--border-color);
			border-radius: 5px;
			margin-top: -1px;
			cursor: pointer;
			&:hover {
				&::after {
					transform: translate(0, 0);
					opacity: 1;
				}
				& .hero__icon-plus {
					fill: var(--white-color);
				}
				& .hero__icon-minus {
					fill: var(--white-color);
				}
				& .hero__text-crm {
					color: var(--white-color);
				}
				& .hero__text-hide {
					color: var(--white-color);
				}
			}
			&::after {
				content: "";
				position: absolute;
				inset: 0;
				border-radius: 5px;
				background: var(--green-color);
				transform: translate(4px, 4px);
				opacity: 0;
				transition: opacity 0.4s, transform 0.4s;
			}
		}
	}
	&__table {
		width: 100%;
		border-spacing: 0;
		outline: 1px solid var(--border-color);
		outline-offset: -1px;
		border-radius: 5px;
	}
	&__header {
		border-radius: 5px;
		background: var(--green-color);
		& .hero__cell {
			&:first-child {
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
			}
			&:last-child {
				border-top-right-radius: 5px;
				border-bottom-right-radius: 5px;
			}
		}
	}
	&__cell {
		display: flex;
		align-items: center;
		text-align: center;
		padding: 19px 6px;
		font-size: 14px;
		line-height: 17px;
		letter-spacing: 0em;
		color: var(--black-color);
		border-right: 1px solid transparent;
		border-left: 1px solid transparent;
		transition: border 0.2s ease;
		&-header {
			position: relative;
			font-size: 16px;
			font-weight: 700;
			line-height: 120%;
			padding-top: 20px;
			padding-bottom: 20px;
			color: var(--white-color);
			justify-content: center;
			&-crm {
				color: transparent;
				pointer-events: none;
				user-select: none;
			}
			&-hide {
				color: transparent;
				pointer-events: none;
				user-select: none;
			}
			&-hide-after {
				&::after {
					opacity: 0;
				}
			}
			&:not(:last-child) {
				&::after {
					content: "";
					position: absolute;
					right: -1px;
					top: 50%;
					transform: translateY(-50%);
					background: var(--border-color);
					width: 1px;
					height: 55%;
					transition: opacity 0.4s ease;
				}
			}
		}
		&-hovered {
			border-right: 1px solid var(--border-color);
			border-left: 1px solid var(--border-color);
		}
		& a {
			font-size: inherit;
			line-height: inherit;
			font-weight: inherit;
			color: inherit;
			text-decoration: none;
		}
	}
	&__col {
		box-sizing: border-box;
		&-name {
			box-sizing: border-box;
			text-align: left;
			max-width: 200px;
			width: 100%;
		}
		&-phone {
			box-sizing: border-box;
			white-space: nowrap;
			max-width: 180px;
			width: 100%;
			justify-content: center;
		}
		&-job {
			box-sizing: border-box;
			max-width: 180px;
			width: 100%;
			justify-content: center;
		}
		&-vacancy {
			box-sizing: border-box;
			max-width: 180px;
			width: 100%;
			justify-content: center;
		}
		&-salary {
			box-sizing: border-box;
			max-width: 90px;
			width: 100%;
			justify-content: center;
		}
		&-city {
			box-sizing: border-box;
			max-width: 180px;
			width: 100%;
			justify-content: center;
		}
		&-link {
			box-sizing: border-box;
			max-width: 100px;
			width: 100%;
			justify-content: center;
		}
		&-crm {
			box-sizing: border-box;
			max-width: 85px;
			width: 100%;
		}
		&-hide {
			box-sizing: border-box;
			max-width: 110px;
			width: 100%;
		}
	}
	&__row {
		display: flex;
		&:not(:first-child) {
			box-shadow: 0 -1px 0 var(--border-color);
		}
		& .hero__cell {
			&:first-child {
				padding-left: 9px;
				border-left: 1px solid transparent !important;
			}
			&:last-child {
				border-right: 1px solid transparent !important;
				padding-right: 9px;
			}
		}
	}
	&__icon {
		&-plus {
			position: relative;
			width: 13.727px;
			height: 13.727px;
			fill: var(--green-color);
			margin-right: 10px;
			z-index: 100;
			transition: fill 0.4s ease;
		}
		&-minus {
			position: relative;
			width: 19px;
			height: 19px;
			fill: var(--green-color);
			margin-right: 10px;
			z-index: 100;
			transition: fill 0.4s ease;
		}
	}
	&__text {
		&-crm {
			position: relative;
			z-index: 100;
			transition: color 0.4s ease;
			font-size: 12px;
			font-weight: 700;
			line-height: 15px;
			margin-top: -0.5px;
		}
	}
	&__slider {
		&-pagination {
			max-width: 82px;
		}
	}
	&__text {
		&-pages {
			position: relative;
			display: flex;
			align-items: center;
		}
		&-page {
			margin-right: 11px;
		}
		&-footer {
			font-family: var(--second-family);
			font-size: 11px;
			font-weight: 600;
			line-height: 15px;
			text-transform: uppercase;
			margin: 0;
		}
	}
	&__footer {
		border-top: 1px solid rgba(225, 83, 53, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 22px;
	}
	&__button {
		&-control {
			font-family: var(--second-family);
			font-size: 11px;
			font-weight: 600;
			line-height: 15px;
			text-transform: uppercase;
			&:disabled {
				color: var(--black-color);
			}
		}
		&-prev {
			margin-right: 25px;
		}
		&-next {
			margin-left: 27px;
		}
		&-last {
			position: relative;
			margin-left: 27px;
			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -13px;
				height: 100%;
				width: 1px;
				background: var(--black-color);
				font-weight: 700;
			}
		}
	}
	&__pagination {
		position: relative;
		bottom: unset !important;
		left: unset !important;
	}
	&__bullet {
		display: block;
		position: relative;
		background: transparent;
		font-family: var(--second-family);
		font-size: 13px;
		font-weight: 600;
		line-height: 15px;
		margin-left: 0 !important;
		opacity: 1;
		height: 100% !important;
		line-height: 18px;
		transition: color 0.3s linear;
		&:last-child {
			margin-right: 0 !important;
		}
		&:first-child {
			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: -13px;
				height: 100%;
				width: 1px;
				background: var(--black-color);
				font-weight: 700;
			}
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			right: -13px;
			height: 100%;
			width: 1px;
			background: var(--black-color);
			font-weight: 700;
		}
		&-active {
			color: var(--blue-color);
		}
	}
	&__select {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		padding: 5px 49px 5px 15px;
		border-radius: 2px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		font-family: var(--second-family);
		font-size: 12px;
		font-weight: 400;
		margin-left: 11px;
		background: url("../img/down-arrow.svg") no-repeat var(--white-color);
		background-size: 17px 9px;
		background-position-x: 75%;
		background-position-y: 50%;
		&::-ms-expand {
			display: none;
		}
	}
}

.list-reset {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
