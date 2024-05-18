import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMobileNavigationButtonComponent } from './main-mobile-navigation-button.component';

describe('MainMobileNavigationButtonComponent', () => {
  let component: MainMobileNavigationButtonComponent;
  let fixture: ComponentFixture<MainMobileNavigationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMobileNavigationButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMobileNavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
