import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { UserModel } from './model/usermodel';
import { Chart } from 'chart.js';
import { ChartData } from './model/chartData';
import { PassingValues } from './model/passingvalue';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import {MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allData: UserModel;
  allDataArray: ChartData[];
  chart = [];
  chartData: [];
  eventTitle = [];
  passingValues = new PassingValues;
  sent = [];
  bounced = [];
  all = [];
  clicked = [];
  complaint = [];
  opened = [];
  unsubscribed = [];
  reject = [];
  maxvalue: number;
  
  constructor(private _service: WeatherService, private datePipe: DatePipe) {
   
   }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    
   // this.getData();
    this.getChartDataFromApi();
    this.passingValues.from = "2019-08-10";
    this.passingValues.to = "2019-08-11"
  }
  dateVal = new Date();
  displayedColumns: string[] = ['title', 'datetime', 'status', 'recipients','report.Sent','report.Complaint','report.Opened', 'report.Clicked','report.Bounced', 'report.Unsubscribe', 'report.reject', 'report.All'];
  dataSource: any;
  getChartDataFromApi() {
    this._service.dailyForecastFromApi(this.passingValues).subscribe(
      response => {
        this.allDataArray = response;
      //  this.dataSource=new MatTableDataSource(this.allDataArray);
        this.dataSource = this.allDataArray;
        // this.dataSource.sort = this.sort;
        // this.dataSource.report.sort = this.sort;
        for (let i = 0; i < this.allDataArray.length; i++) {
          this.eventTitle.push(this.allDataArray[i].title);
          this.sent.push(this.allDataArray[i].report.Sent);
          this.bounced.push(this.allDataArray[i].report.Bounced);
          this.all.push(this.allDataArray[i].report.All);
          this.clicked.push(this.allDataArray[i].report.Clicked);
          this.complaint.push(this.allDataArray[i].report.Complaint);
          this.opened.push(this.allDataArray[i].report.Opened);
          this.unsubscribed.push(this.allDataArray[i].report.Unsubscribe);
          this.reject.push(this.allDataArray[i].report.reject);
          this.maxvalue = 40 / 5
        }
        console.log("after multiples :" + this.sent);
        console.log("chart data from api:" + JSON.stringify(this.eventTitle));
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: this.eventTitle,
            datasets: [
              {
                label:"Sent",
                data: this.sent,
                borderColor: '#00FF00',
                fill: false
              },
              {
                label:"Complaint",
                data: this.complaint,
                borderColor: '#ff3300',
                fill: false
              },
              {
                label:"Opened",
                data: this.opened,
                borderColor: '#82CAFA',
                fill: false
              },
              {
                label:"Clicked",
                data: this.clicked,
                borderColor: '#FF1493',
                fill: false
              },
              {
                label:"Bounced",
                data: this.bounced,
                borderColor: '#FF4500',
                fill: false
              },
              { 
                label:"Unsubscribed",
                data: this.unsubscribed,
                borderColor: '#ffcc00',
                fill: false
              },
              { 
                label:"Reject",
                data: this.reject,
                borderColor: '#8B0000',
                fill: false
              },
              {
                label:"All",
                data: this.all,
                borderColor: '#8B008B',
                fill: false
              },
            ]
          },
          options: {
            
            legend: {
              display: true,
              text:"hello"
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontSize: 8.5,
                  autoSkip: false,
                  maxRotation: 0,
                  minRotation: 0

                },

                stacked: true,
                display: true,

              },
              ],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: this.maxvalue
                },
                type: 'linear',
                display: true
              }]
            }
          }
        })
      })
  }
  

 

        data :any= {
            labels: this.eventTitle,
            datasets: [
              {
                label:"Sent",
                data: this.sent,
                borderColor: '#00FF00',
                fill: false
              },
              {
                label:"Complaint",
                data: this.complaint,
                borderColor: '#ff3300',
                fill: false
              },
              {
                label:"Opened",
                data: this.opened,
                borderColor: '#82CAFA',
                fill: false
              },
              {
                label:"Clicked",
                data: this.clicked,
                borderColor: '#FF1493',
                fill: false
              },
              {
                label:"Bounced",
                data: this.bounced,
                borderColor: '#FF4500',
                fill: false
              },
              { 
                label:"Unsubscribed",
                data: this.unsubscribed,
                borderColor: '#ffcc00',
                fill: false
              },
              { 
                label:"Reject",
                data: this.reject,
                borderColor: '#8B0000',
                fill: false
              },
              {
                label:"All",
                data: this.all,
                borderColor: '#8B008B',
                fill: false
              },
            ]
           }
           selectData(event) {
            alert(event);
              // this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
          }
            
        }
    

   

