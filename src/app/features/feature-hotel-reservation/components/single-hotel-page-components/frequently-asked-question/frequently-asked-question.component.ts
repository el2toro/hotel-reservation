import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-question',
  templateUrl: './frequently-asked-question.component.html',
  styleUrls: ['./frequently-asked-question.component.scss']
})
export class FrequentlyAskedQuestionComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
