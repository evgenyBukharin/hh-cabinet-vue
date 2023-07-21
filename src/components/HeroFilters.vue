<template>
	<div class="filters hero__filters">
		<div class="filters__container">
			<div class="filters__container-switch" :class="{ 'filters__container-switch-hidden': isInputActive }">
				<label class="switch">
					<input type="checkbox" id="switch-input" @change="isSwitchActive = !isSwitchActive" />
					<span
						class="slider round"
						:class="{
							'switch-active': isSwitchActive,
						}"
					>
						<span class="filters__text-switch switch__text">Отклики</span>
						<span class="filters__text-switch switch__text">Избранное</span>
					</span>
				</label>
			</div>
			<div
				class="filters__container-filters"
				:class="{ 'filters__container-filters-active': isInputActive }"
				@click="isInputActive = !isInputActive"
			>
				<input type="text" class="filters__input-search" />
			</div>
			<div class="filters__container-statuses">
				<input
					type="text"
					readonly="readonly"
					class="filters__input-select"
					v-model="$store.state.selectedStatus"
				/>
			</div>
		</div>
		<div class="filters__container-main" :class="{ 'filters__container-main-active': isInputActive }">
			<div class="filters__list">
				<div class="filters__item" v-for="(category, idx) in $store.state.categotyFilterList" :key="idx">
					<h4 class="filters__title filters__title-category">{{ category.ru }}</h4>
					<div class="filters__categories">
						<simplebar data-simplebar-auto-hide="false" style="max-height: 81px">
							<div
								class="filters__category"
								v-for="(item, idx) in getUniqueItems(category.en)"
								:key="idx"
							>
								<input
									class="filters__checkbox"
									type="checkbox"
									:value="{ category: category.en, value: item }"
									:id="item + idx"
									@change="newFilterHandler({ category: category.en, value: item })"
								/>
								<label class="filters__label" :for="item + idx"></label>
								{{ item }}
							</div>
						</simplebar>
					</div>
				</div>
			</div>
			<div class="filters__container-buttons">
				<button class="filters__button filters__button-clear" @click="removeAllFilters()" ref="clearButton">
					Сбросить
				</button>
				<button class="filters__button filters__button-apply" @click="filterRowsData()" ref="applyButton">
					Применить
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
export default {
	name: "HeroFilters",
	data() {
		return {
			isSwitchActive: false,
			isInputActive: false,
		};
	},
	components: {
		simplebar,
	},
	methods: {
		getUniqueItems(category) {
			const result = this.$store.state.rowsData.reduce((acc, item) => {
				if (acc.includes(item[category])) {
					return acc;
				}
				return [...acc, item[category]];
			}, []);
			return result;
		},
		newFilterHandler(filterData) {
			let filterIndex = this.checkExistingFilter(filterData);
			if (filterIndex == -1) {
				this.$store.commit("addNewFilter", filterData);
			} else {
				this.$store.commit("deleteOldFilter", filterData, filterIndex);
			}
		},
		checkExistingFilter(filterData) {
			let index = this.$store.state.filterModel[filterData.category].findIndex((filter) => {
				return filter == filterData.value;
			});
			return index;
		},
		removeAllFilters() {
			this.$store.commit("clearFilterModel");
			this.removeAllChecked();
			this.updateSlider();
		},
		filterRowsData() {
			this.updateSlider();
		},
		removeAllChecked() {
			const mainList = document.querySelector(".filters__list");
			const checkboxes = mainList.querySelectorAll(".filters__checkbox:checked");
			checkboxes.forEach((checkbox) => {
				checkbox.click();
			});
		},
		updateSlider() {
			this.$store.commit("clearPreparedSlides");
			if (this.$store.getters.isModelEmpty) {
				this.$store.commit("makePreparedSlides");
			} else {
				this.$store.commit("makeFilteredSlides");
			}
		},
	},
};
</script>

<style lang="scss">
.filters {
	overflow: hidden;
	margin-bottom: 25px;
	&__container {
		display: flex;
		gap: 25px;
		&-switch {
			position: relative;
			&-hidden {
				display: none;
			}
		}
		&-filters {
			width: 100%;
		}
		&-buttons {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: 25px;
		}
		&-main {
			border-radius: 10px;
			max-height: 0;
			border: 0;
			padding: 0;
			&-active {
				border: 1px solid var(--green-color);
				padding: 20px;
				padding-left: 25px;
				max-height: unset;
				margin-top: 25px;
			}
		}
		&-statuses {
			width: 100%;
			height: 100%;
			max-width: 300px;
			position: relative;
			cursor: pointer;
			&::after {
				content: "";
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 13px;
				width: 25px;
				height: 25px;
				background: url("../img/triangle.svg") no-repeat;
				background-position: center center;
			}
		}
	}
	&__input {
		&-search {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			border: 1px solid var(--green-color);
			background: var(--white-color);
			padding: 10px;
			display: flex;
			color: var(--black-color);
			font-size: 24px;
			font-weight: 400;
			&::placeholder {
				color: rgba(0, 0, 0, 0.25);
				font-size: 24px;
				font-weight: 400;
			}
		}
		&-select {
			font-size: 18px;
			font-weight: 400;
			line-height: 22px;
			text-align: center;
			width: 100%;
			height: 100%;
			border-radius: 10px;
			border: 1px solid var(--orange-color);
			background: var(--white-color);
			padding: 15px;
			cursor: pointer;
		}
	}
	&__title {
		margin: 0;
		&-category {
			color: var(--black-color);
			font-size: 18px;
			line-height: 120%;
			font-weight: 400;
		}
	}
	&__list {
		display: flex;
		justify-content: space-between;
		gap: 45px;
		margin-bottom: 25px;
	}
	&__item {
		display: flex;
		gap: 25px;
		width: 100%;
	}
	&__categories {
		border-radius: 10px;
		border: 1px solid var(--light-green-color);
		background: var(--white-color);
		padding: 10px;
		width: 100%;
		max-width: 280px;
		& .filters__category {
			&:not(:last-child) {
				margin-bottom: 7px;
			}
		}
	}
	&__category {
		color: var(--black-color);
		font-size: 12px;
		font-weight: 400;
		line-height: 120%;
		display: flex;
		align-items: center;
		gap: 6px;
		position: relative;
	}
	&__label {
		display: block;
		position: relative;
		min-width: 15px;
		min-height: 15px;
		width: 15px;
		height: 15px;
		border: 1px solid var(--light-green-color);
		border-radius: 5px;
		cursor: pointer;
		z-index: 25;
		&::before {
			content: "";
			position: absolute;
			top: 44%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(45deg);
			width: 4px;
			height: 8px;
			border: solid var(--white-color);
			border-width: 0 2px 2px 0;
			opacity: 0;
			transition: opacity 0.3s;
			z-index: 100;
		}
		&::after {
			content: "";
			position: absolute;
			inset: -1px;
			opacity: 0;
			transition: opacity 0.3s;
			background: var(--green-color);
			border-radius: 5px;
			z-index: 50;
		}
	}
	&__checkbox {
		position: absolute;
		width: 0;
		height: 0;
		top: -1px;
		left: -1px;
		overflow: hidden;
		opacity: 0;
		visibility: hidden;
		&:checked ~ .filters__label::before,
		&:checked ~ .filters__label::after {
			opacity: 1;
		}
	}
	&__button {
		padding: 3px 15px;
		border-radius: 5px;
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		color: var(--white-color);
		border: 0;
		outline: 0;
		cursor: pointer;
		&-clear {
			background: var(--orange-color);
		}
		&-apply {
			background-color: var(--green-color);
		}
	}
}

.simplebar-track.simplebar-vertical {
	width: 2px;
	background: #d9d9d9;
}
.simplebar-scrollbar {
	width: 2px;
	background: var(--green-color);
}

.switch {
	position: relative;
	display: inline-block;
	width: 300px;
	height: 50px;
	&__text {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		z-index: 100;
		color: var(--black-color);
		transition: color 0.4s;
		font-size: 18px;
		font-weight: 400;
		line-height: 22px;
		&:first-child {
			color: var(--white-color);
		}
		&:last-child {
			color: var(--black-color);
		}
	}
	&-active {
		& .switch__text {
			&:first-child {
				color: var(--black-color);
			}
			&:last-child {
				color: var(--white-color);
			}
		}
	}
}
/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--white-color);
	transition: all 0.4s;
	border: 1px solid var(--orange-color);
	border-radius: 10px;
	display: flex;
}

.slider:before {
	position: absolute;
	content: "";
	height: 100%;
	width: 50%;
	left: -1px;
	bottom: 0;
	background: var(--orange-color);
	transition: all 0.4s;
}

input:checked + .slider:before {
	transform: translateX(102%);
}

/* Rounded sliders */
.slider.round:before {
	border-radius: 10px;
}
</style>
