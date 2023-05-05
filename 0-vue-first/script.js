const app = Vue.createApp({
	data() { // data: function() {
		return {
			message: 'Ciao a tutti',
			aggiunta: 'quanti',
			classValue: ['text-danger', 'text-center'],
			html: `
				<div>Ciao</div>
				<p>Loerm ipsum</p>
			`,
		}
	},
	methods: {
		greet() {
			alert(this.message);
			this.greetOnConsole();
		},
		greetOnConsole() {
			console.log(this.message);
		},
		manageKeyPress(event, text) {
			console.log(text + event.key);
			// this.greet();
		},
		divClicked() {
			console.log('div cliccato');
		},
		buttonClicked() {
			console.log('button cliccato');
		}
	}
});

// potrebbe essere necessario scrivere altre istruzioni prima di mount

app.mount('#root');



// let message = 'Ciao a tutti';
// const eleMessage = document.querySelector('#app div');
// eleMessage.innerHTML = message;


// const eleBtn = document.querySelector('button');
// eleBtn.addEventListener('click', function() {
// 	alert('ciao a tutti');
// })


// const eleForm = document.querySelector('form');
// eleForm.addEventListener('submit', function(event) {
// 	event.preventDefault();
// });