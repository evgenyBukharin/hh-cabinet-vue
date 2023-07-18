import { createStore } from "vuex";

export default createStore({
	state: {
		rowsPerSlide: 5,
		preparedSlides: [],
		pageCountOptions: [5, 10, 15],
		searchPhrase: "",
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
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Терапевт",
				vacancy: "Врач-невролог 1",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Уборщик",
				vacancy: "Врач-невролог 2",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Глав врач",
				vacancy: "Врач-невролог 3",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Педиатор",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Дантист",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Травматолог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
			{
				name: "Иванов Евгений Иванович",
				phone: "+7 (908) 078 87 23",
				job: "Врач-невролог",
				vacancy: "Врач-невролог",
				salary: "60 000",
				city: "Челябинск",
			},
		],
	},
	getters: {
		slidesCount: (state) => {
			return Math.floor(state.rowsData.length / state.rowsPerSlide);
		},
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
	},
	actions: {},
	modules: {},
});
