import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCriticalArticlesComponent } from './display-critical-articles.component';

describe('DisplayCriticalArticlesComponent', () => {
  let component: DisplayCriticalArticlesComponent;
  let fixture: ComponentFixture<DisplayCriticalArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCriticalArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCriticalArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
