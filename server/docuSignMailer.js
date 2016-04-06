var async = require('async');
var request = require('request');
var url = "https://demo.docusign.net/restapi/v2/login_information";
var body = "";
var integratorKey = 'MAKE-04a8d9bd-6bec-4a62-a9a9-161fbcfd6b2f';

module.exports = function(email, password, recipientInfo, templateInfo) {
	async.waterfall([
		function login(next){
			var options = initializeRequest(url, "GET", body, email, password);
			request(options, function(err, res, body) {
				if(!parseResponseBody(err, res, body)) {
					console.log(err);
					return;
				}
				baseUrl = JSON.parse(body).loginAccounts[0].baseUrl;
				next(null, baseUrl); // call next function
			});
		},

		function generateEnvelope(baseUrl, next){
			var url  = baseUrl + "/envelopes";
			var body = JSON.stringify({
					"emailSubject": "DocuSign API call - Request Signature",
					"templateId": templateInfo.id,
					"templateRoles": [{
						"email": recipientInfo.email,
						"name": recipientInfo.name,
						"roleName": templateInfo.roleName
					}],
					"status": "sent"
				});

			// set url, method, body, and headers
			var options = initializeRequest(url, "POST", body, email, password);

			// send the request...
			request(options, function(err, res, body) {
				console.log(body);
			});
		}
	]);
	

};

//////////////////////////////////////////////////////////

function initializeRequest(url, method, body, email, password) {	
	var options = {
		"method": method,
		"uri": url,
		"body": body,
		"headers": {}
	};
	addRequestHeaders(options, email, password);
	return options;
}

///////////////////////////////////////////////////////////////////////////////////////////////
function addRequestHeaders(options, email, password) {	
	// JSON formatted authentication header (XML format allowed as well)
	dsAuthHeader = JSON.stringify({
		"Username": email,
		"Password": password, 
		"IntegratorKey": integratorKey	// global
	});
	// DocuSign authorization header
	options.headers["X-DocuSign-Authentication"] = dsAuthHeader;
}

///////////////////////////////////////////////////////////////////////////////////////////////
function parseResponseBody(err, res, body) {
	console.log("\r\nAPI Call Result: \r\n", JSON.parse(body));
	if( res.statusCode != 200 && res.statusCode != 201)	{ // success statuses
		console.log("Error calling webservice, status is: ", res.statusCode);
		console.log("\r\n", err);
		return false;
	}
	return true;
}