import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCriticalArticleComponent } from './create-critical-article.component';

describe('CreateCriticalArticleComponent', () => {
  let component: CreateCriticalArticleComponent;
  let fixture: ComponentFixture<CreateCriticalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCriticalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCriticalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
