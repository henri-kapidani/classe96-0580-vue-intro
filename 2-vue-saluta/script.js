/*
Predisponiamo due input, in cui inseriremo Nome e Cognome.
In un paragrafo utilizzare Nome e Cognome per salutare l’utente
*/

const app = Vue.createApp({
	data() {
		return {
			firstName: '',
			lastName: '',
		}
	},
});

app.mount('#root');
