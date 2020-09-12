import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierArticleComponent } from './modifier-article.component';

describe('ModifierArticleComponent', () => {
  let component: ModifierArticleComponent;
  let fixture: ComponentFixture<ModifierArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
