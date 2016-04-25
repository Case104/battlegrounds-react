module.exports = api = {
	postUsers(userData){
		var url = 'http://localhost:3000/users'
		var details = {
			method: 'POST',
			body: JSON.stringify(userData)
		}
		return fetch(url, details).then((response) => response.json());
	}
};
