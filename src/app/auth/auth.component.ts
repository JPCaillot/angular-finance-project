import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements DoCheck{
  credential: string = '';
  constructor(private route: ActivatedRoute) {}

  ngDoCheck(): void {
    this.credential = this.route.snapshot.params['mode'];

  }
}
