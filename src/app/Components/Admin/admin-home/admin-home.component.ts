import { ApiService } from 'src/app/Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private service: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
   
    
  }
  users = localStorage.getItem("users")
  published = localStorage.getItem("published")
  declined = localStorage.getItem("declined")
doughnutChartLabels: Label[] = ['Published Stories', 'Declined Stories'];
  doughnutChartData: MultiDataSet = [
    [Number(this.published),Number(this.declined)]
  ];
  doughnutChartType: ChartType = 'doughnut';



}
