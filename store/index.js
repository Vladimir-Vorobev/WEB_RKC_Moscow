export const APP_STORE = {
	state: {
		email: '',
		SessionID: 0,
		serverIp: 'https://profeventsserver.tk',
		socketIp: 'https://profeventsserver.tk',
	},
	mutations: {
		GET_USER_EMAIL(state, value) {
			state.email = value;
		},
		GET_USER_SESSIONID(state, value){
			state.SessionID = value;
		},
	},
	getters: {
		email: (state) => state.email,
		SessionID: (state) => state.SessionID,
	},
};