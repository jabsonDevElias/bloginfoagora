import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadenoticiasComponent } from './listadenoticias.component';

describe('ListadenoticiasComponent', () => {
  let component: ListadenoticiasComponent;
  let fixture: ComponentFixture<ListadenoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadenoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadenoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
