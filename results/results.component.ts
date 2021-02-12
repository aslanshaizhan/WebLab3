import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  data: Array<any>;

  constructor() {
    this.data = [
      { date: '2018-04-11', distance: '5.000.00', time: '42:40', average: '7.20', options: 'Edit Delete'},
      { date: '2018-04-03', distance: '3.000.00', time: '13:20', average: '13.50', options: 'Edit Delete' },
      { date: '2018-04-02', distance: '5.000.00', time: '35:00', average: '8.57', options: 'Edit Delete' },
      { date: '2018-03-28', distance: '1.000.00', time: '10:00', average: '6.00', options: 'Edit Delete' },
      { date: '2018-03-27', distance: '1.200.00', time: '12:00', average: '6.00', options: 'Edit Delete'},
      { date: '2018-03-26', distance: '1.300.00', time: '13:30', average: '6.24', options: 'Edit Delete'}
    ];
  }

  ngOnInit(): void {
  }
}
