// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  onClick() {
    this.router.navigate(["supprimer-article"]);
  }

  onClick2() {
    this.router.navigate(["modifier-article"]);
  }

  onClick3() {
    this.router.navigate(["modifier-article"]);
  }
}
