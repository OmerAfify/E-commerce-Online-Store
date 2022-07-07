import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigItemBoxComponent } from './big-item-box.component';

describe('BigItemBoxComponent', () => {
  let component: BigItemBoxComponent;
  let fixture: ComponentFixture<BigItemBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigItemBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigItemBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
