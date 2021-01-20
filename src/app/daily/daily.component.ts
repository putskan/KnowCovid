import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../api-handler.service'

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  
  constructor(private apiHandler: ApiHandlerService) {}
  ngOnInit(): void {
  	this.apiHandler.apiGet('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total').subscribe((res) => { 
  		displayData(res.data);
  	})
  }

	function displayData(api_data: {}) {
		console.log(api_data);
	}
  	
}
