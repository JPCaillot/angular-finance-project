import { Component, DoCheck, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements DoCheck{
  mode: string = '';

  constructor(private route: ActivatedRoute) {}

  ngDoCheck(): void {
    this.mode = this.route.snapshot.params['mode'];
  }
}
