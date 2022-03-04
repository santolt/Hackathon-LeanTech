import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAdd(){
    this.router.navigate(['/form/add'])
    this.sidenav.close()
  }

  mainPage(){
    this.router.navigate(['/form/list'])
  }



}
