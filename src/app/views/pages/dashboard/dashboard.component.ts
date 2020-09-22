// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//translate
import { TranslateService } from "@ngx-translate/core";
import { TranslationService } from "../../../core/_base/layout";
@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(
    public router: Router,
    private translate: TranslateService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.translationService.setLanguage(
      this.translationService.getSelectedLanguage()
    );
  }
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
