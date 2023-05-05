/*
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/

const app = Vue.createApp({
	data() {
		return {
			classValue: 'red',
			colorValue: 'red',
			styleValue: { color: 'red', backgroundColor: 'blue'},
			isActive: true,
		}
	},
	methods: {
		changeColor() {
			if (this.classValue == 'red') {
				this.classValue = 'green';
			} else {
				this.classValue = 'red';
			}
		},
		toggleBackground() {
			this.isActive = !this.isActive;
		}
	}
});

app.mount('#root');
