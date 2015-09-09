module.exports = function (path, method, body, parameter, callback) {
	var url = 'http://www.ruiqi.io/autotest/api' + path;
	if (parameter) {
		url += '?';
		for (var key in parameter) {
			url += (key + '=' + parameter[key] + '&');
		}
		url = url.slice(0, url.length - 1);
	}

	var config = {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	if (body) {
		config.body = JSON.stringify(body);
	}

	fetch(url, config)
		.then(response => response.json())
		.then(body => {
			if (body.success) {
				callback(null, body.data);
			} else {
				callback(JSON.stringify(body.data));
			}
		})
		.catch(err => callback(JSON.stringify(err)));
}