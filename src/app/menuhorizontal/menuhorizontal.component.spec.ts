import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhorizontalComponent } from './menuhorizontal.component';

describe('MenuhorizontalComponent', () => {
  let component: MenuhorizontalComponent;
  let fixture: ComponentFixture<MenuhorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuhorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuhorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
