import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingACategoryPageComponent } from './adding-a-category-page.component';

describe('AddingACategoryPageComponent', () => {
  let component: AddingACategoryPageComponent;
  let fixture: ComponentFixture<AddingACategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingACategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingACategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
