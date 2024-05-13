import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMobileNavigationComponent } from './main-mobile-navigation.component';

describe('MainMobileNavigationComponent', () => {
  let component: MainMobileNavigationComponent;
  let fixture: ComponentFixture<MainMobileNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMobileNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMobileNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
