API_URL = 'http://10.0.0.59:3000'

module.exports = api = {

	postUsers(userData){
		var url = 'http://10.0.0.59:3000/users'
		var details = {
			method: 'POST',
			body: JSON.stringify(userData)
		}
		return fetch(url, details).then((response) => response.json());
	},

	postUsersFb(photo, email){
		console.log('email', 'photo')
		var url = 'http://10.0.0.59:3000/users'
		var details ={
			method: 'POST',
			body: JSON.stringify({photo: photo.data.url, email: email.email })
		}
		return fetch(url, details).then((response) => response.json());
	},

	getFbPhoto(user){
		var url = `https://graph.facebook.com/v2.3/${user.credentials.userId}/picture?width=200&redirect=false&access_token=${user.credentials.token}`
		return fetch(url).then((response) => response.json());
	},

	getFbEmail(user){
		var url = `https://graph.facebook.com/v2.3/${user.credentials.userId}?fields=email&access_token=${user.credentials.token}`
		return fetch(url).then((response) => response.json());
	},

	getLeaderboardData(){
		var url='http://10.0.0.59:3000/users'
		return fetch(url).then((response) => response.json());
	},

	denyBattle(battle){
		var url = 'http://10.0.0.59:3000/battle/decline'
		var details = {
			method: 'PATCH',
			body: JSON.stringify(battle)
		}
		return fetch(url, details).then((response) => response.json());
	},

  postGeolocations(location, user) {
    var url = API_URL + '/geolocations'
    var details = {
      method: 'POST',
      body: JSON.stringify({location, user})
    }
    return fetch(url, details).then((response) => response.json());
  },

  quickDrawRequest(battle){
  	var url = 'http://10.0.0.59:3000/battle/quickdraw'
  	var details = {
  		method: 'PATCH',
  		body: JSON.stringify(battle)
  	}
  	return fetch(url, details).then((response) => response.json());
  },

};
