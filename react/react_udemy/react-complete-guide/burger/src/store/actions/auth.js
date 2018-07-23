import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = (expirationTime) => {
	return dispatch => {
		console.log(expirationTime);
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000);
	};
};

export const auth = (email, password, isSignup) => {
	console.log("Signup : ", isSignup);
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returenSecureToken: true
		};
		let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBYzNXLm5XVJyfaggNK_TJYLfQ3Vk0opPY';
		if (!isSignup) {
			url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBYzNXLm5XVJyfaggNK_TJYLfQ3Vk0opPY';
		}
		axios.post(url, authData)
			.then(response => {
				console.log(response.data);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
				console.log("Id Token : ", response.data.idToken);
				dispatch(checkAuthTimeout(3600));
			})
			.catch(err => {
				dispatch(authFail(err.response.data.error));
			})
	};
};
