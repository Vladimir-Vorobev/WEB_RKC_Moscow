export const APP_STORE = {
	state: {
		email: '',
		SessionID: '',
		role: '',
		serverIp: '',
		socketIp: '',
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
		role: (state) => state.role,
	},
};