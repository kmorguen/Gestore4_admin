import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-modifier-stock',
  templateUrl: './modifier-stock.component.html',
  styleUrls: ['./modifier-stock.component.scss']
})
export class ModifierStockComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['supprimer-article']);
  }

  onClick2() {
    this.router.navigate(['modifier-article']);
  }


}
