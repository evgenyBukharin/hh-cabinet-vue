import { createStore } from "vuex";

export default createStore({
	state: {
		rowsPerSlide: 5,
		preparedSlides: [],
		pageCountOptions: [5, 10, 15],
		searchPhrase: "",
		currentFilters: [],
		filterModel: {
			vacancy: [],
			job: [],
			city: [],
		},
		categotyFilterList: [
			{
				en: "vacancy",
				ru: "Вакансия",
			},
			{
				en: "job",
				ru: "Должность",
			},
			{
				en: "city",
				ru: "Город",
			},
		],
		rowsData: [
			{
				id: 0,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Терапевт",
				vacancy: "Врач-невролог 1",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 1,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Уборщик",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Екатеринбург",
			},
			{
				id: 2,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Глав врач",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Алматы",
			},
			{
				id: 3,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Педиатор",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Екатеринбург",
			},
			{
				id: 4,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Дантист",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Москва",
			},
			{
				id: 5,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Уборщик",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Екатеринбург",
			},
			{
				id: 6,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Уборщик",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Алматы",
			},
			{
				id: 7,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Педиатор",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 8,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 9,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Алматы",
			},
			{
				id: 10,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Алматы",
			},
			{
				id: 11,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 12,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 13,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 14,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 15,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 16,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Уборщик",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 17,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Фронтендер",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				id: 18,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Педиатор",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Москва",
			},
			{
				id: 18,
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Педиатор",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Нью-Йорк",
			},
		],
	},
	mutations: {
		makePreparedSlides(state) {
			for (let i = 0; i < state.rowsData.length; i += state.rowsPerSlide) {
				const chunk = state.rowsData.slice(i, i + state.rowsPerSlide);
				state.preparedSlides.push(chunk);
			}
		},
		clearPreparedSlides(state) {
			state.preparedSlides = [];
		},
		addNewFilter(state, filterData) {
			state.filterModel[filterData.category].push(filterData.value);
			console.log(state.filterModel);
		},
		deleteOldFilter(state, filterData, idx) {
			state.filterModel[filterData.category].splice(idx, 1);
			console.log(state.filterModel);
		},
		makeFilteredSlides(state) {
			let matchedRowData = [];
			let lastFilteredKey = "";
			for (const key in state.filterModel) {
				if (Object.hasOwnProperty.call(state.filterModel, key)) {
					const filterModelEl = state.filterModel[key];
					if (filterModelEl.length > 0) {
						filterModelEl.forEach((filterValue) => {
							state.rowsData.forEach((row) => {
								if (row[key] == filterValue) {
									matchedRowData.push(row);
								}
							});
						});
						lastFilteredKey = key;
						break;
					}
				}
			}
			console.log(matchedRowData);

			let keys = Object.keys(state.filterModel);
			let nextCategory = keys[keys.indexOf(lastFilteredKey) + 1];

			let filteredData = [];
			if (nextCategory !== undefined && state.filterModel[nextCategory].length > 0) {
				matchedRowData.forEach((el) => {
					state.filterModel[nextCategory].forEach((value) => {
						if (el[nextCategory] == value) {
							filteredData.push(el);
						}
					});
				});
			} else {
				filteredData = matchedRowData;
			}
			lastFilteredKey = nextCategory;
			console.log(filteredData);
			// if (filteredData.length == 0) {
			// }

			let lastFilteredData = [];
			nextCategory = keys[keys.indexOf(lastFilteredKey) + 1];
			if (nextCategory !== undefined && state.filterModel[nextCategory].length > 0) {
				filteredData.forEach((el) => {
					state.filterModel[nextCategory].forEach((value) => {
						if (el[nextCategory] == value) {
							lastFilteredData.push(el);
						}
					});
				});
			} else {
				lastFilteredData = filteredData;
			}
			console.log(lastFilteredData);
			// if (lastFilteredData.length == 0) {
			// }
			// console.log("Модель");
			// console.log(state.filterModel);
			// console.log("Данные");
			// console.log(lastFilteredData);

			for (let i = 0; i < lastFilteredData.length; i += state.rowsPerSlide) {
				const chunk = lastFilteredData.slice(i, i + state.rowsPerSlide);
				state.preparedSlides.push(chunk);
			}
		},
		clearFilterModel(state) {
			state.filterModel = {
				vacancy: [],
				job: [],
				city: [],
			};
		},
	},
	actions: {},
	modules: {},
});
