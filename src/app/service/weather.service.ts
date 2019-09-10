import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../model/usermodel';
import { ChartData } from '../model/chartData';
import { PassingValues } from '../model/passingvalue';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://www.insuredmine.xyz/api/api/mailCampaigns/dummyApi';

  constructor(private http: HttpClient) {

   }

  getWeatherReport(): Observable<any> {
    return this.http.get('assets/reoprt.json')
  }
  getChartData(): Observable<ChartData> {
    return this.http.get<ChartData>('assets/chart.json')
  }
  dailyForecastFromApi(passingValues :PassingValues):Observable<any>  {
    console.log("in service file dailyForecastFromApi() is called..........");
    return this.http.post<any>(this.url,passingValues)
  }
}

