import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCriticalArticleComponent } from './modify-critical-article.component';

describe('ModifyCriticalArticleComponent', () => {
  let component: ModifyCriticalArticleComponent;
  let fixture: ComponentFixture<ModifyCriticalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCriticalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCriticalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
