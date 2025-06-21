import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OntarioCovidService, OntarioData } from '../../services/ontario-covid.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {
  detail?: OntarioData;
  userMessage: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private ontarioService: OntarioCovidService
  ) {}

  ngOnInit() {
    this.detail = history.state.item;

    if (this.detail) {
      this.ontarioService.sendDate(this.detail['Reported Date']);
    } else {
      console.warn('No detail data received via navigation state.');
    }
  }

  sendMessage() {
    if(this.userMessage.trim()) {
      this.ontarioService.sendMessage(this.userMessage);
    }
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
}
