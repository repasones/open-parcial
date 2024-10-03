import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.invalidUrl = '';
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  protected onNavigateHome() {
    this.router.navigate(['home']).then();
  }
}