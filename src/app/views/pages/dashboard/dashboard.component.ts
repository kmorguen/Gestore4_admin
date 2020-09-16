// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//translate
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(public router: Router, private translate: TranslateService) {}

  ngOnInit(): void {}
  onClick() {
    this.router.navigate(["stock"]);
  }

  onClick2() {
    this.router.navigate(["supprimer-article"]);
  }

  onClick3() {
    this.router.navigate(["modifier-stock"]);
  }
}
