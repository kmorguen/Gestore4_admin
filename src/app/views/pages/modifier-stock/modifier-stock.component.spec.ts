import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStockComponent } from './modifier-stock.component';

describe('ModifierStockComponent', () => {
  let component: ModifierStockComponent;
  let fixture: ComponentFixture<ModifierStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
