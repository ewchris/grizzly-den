import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDesktopNavigationComponent } from './main-desktop-navigation.component';

describe('MainDesktopNavigationComponent', () => {
  let component: MainDesktopNavigationComponent;
  let fixture: ComponentFixture<MainDesktopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDesktopNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainDesktopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
