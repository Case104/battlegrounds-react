API_URL = 'http://localhost:3000'

module.exports = api = {
	postUsers(userData){
		var url = 'http://localhost:3000/users'
		var details = {
			method: 'POST',
			body: JSON.stringify(userData)
		}
		return fetch(url, details).then((response) => response.json());
	}
  ,
  postGeolocations(location, user) {
    var url = API_URL + '/geolocations'
    var details = {
      method: 'POST',
      body: JSON.stringify({location, user})
    }
    return fetch(url, details).then((response) => response.json());
  }
};
