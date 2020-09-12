// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { StockComponent } from './stock/stock.component';
import { ModifierStockComponent } from './modifier-stock/modifier-stock.component';
import { ProduitsComponent } from './produits/produits.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
// NgBootstrap
import { NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SupprimerArticleComponent } from './supprimer-article/supprimer-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';

// Partials


@NgModule({
  declarations: [StockComponent,
    ModifierStockComponent,
    ProduitsComponent,
    ConfigurationComponent,
    SupprimerArticleComponent,
    ModifierArticleComponent],
  exports: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    PartialsModule,
    MailModule,
    ECommerceModule,
    UserManagementModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    PerfectScrollbarModule,

    // tslint:disable-next-line: deprecation
    NgbTabsetModule,
		NgbTooltipModule


  ],
  providers: []
})
export class PagesModule {
}
