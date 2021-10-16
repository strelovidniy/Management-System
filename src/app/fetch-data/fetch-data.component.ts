import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export default class FetchDataComponent implements OnInit {
    public forecasts: WeatherForecast[];
    public displayedColumns = ['date', 'temperatureC', 'temperatureF', 'summary'];

    public constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    public async ngOnInit(): Promise<void> {
        this.forecasts = await this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').toPromise();
    }
}

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
