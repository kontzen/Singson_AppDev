import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'custom-page-with-id.html',
})
export class CustomPageWithIdPage implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute, private router: Router) {}
  goBacktoCustomPage() {
    this.router.navigate(['custom-page']);
  }

  goBacktoHomePage() {
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
