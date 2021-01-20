import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

	constructor(private httpClient: HttpClient) {
		this.headers = new HttpHeaders()
		this.headers = this.headers.set('x-rapidapi-key', '26eef95381msh1dca71169458cb8p1a0f26jsn20c207bc8583');
		this.headers = this.headers.set('x-rapidapi-host', "covid-19-coronavirus-statistics.p.rapidapi.com");
	}
	
	apiGet(url: string) {
		console.log(this.headers);
		/*return this.httpClient.get(url, {headers: this.headers}).subscribe((res: any) => { return res.json })*/
		return this.httpClient.get(url, {headers: this.headers})
	}
}

/*var unirest = require("unirest");

var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total");

req.headers({
	"x-rapidapi-key": "26eef95381msh1dca71169458cb8p1a0f26jsn20c207bc8583",
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"useQueryString": true
});
*/
/*curl --request GET --url https://covid-193.p.rapidapi.com/statistics --header 'x-rapidapi-host: covid-193.p.rapidapi.com' --header 'x-rapidapi-key: 26eef95381msh1dca71169458cb8p1a0f26jsn20c207bc8583'


fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "26eef95381msh1dca71169458cb8p1a0f26jsn20c207bc8583",
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/