import { Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { newArticlesService } from "src/app/core/_base/layout/services/newArticles.service";

@Component({
  selector: "kt-produits",
  templateUrl: "./produits.component.html",
  styleUrls: ["./produits.component.scss"],
})
export class ProduitsComponent implements OnInit {
  constructor(private newArticleService: newArticlesService) {}
  produit: any[];
  ngOnInit() {}
}
