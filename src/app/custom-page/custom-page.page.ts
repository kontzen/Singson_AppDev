import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.page.html',
  styleUrls: ['./custom-page.page.scss'],
})
export class CustomPagePage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log();
  }

  goByEvent() {
    this.router.navigate(['custom-page', 2]);
  }
}
