import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderCartComponent } from './sider-cart.component';

describe('SiderCartComponent', () => {
  let component: SiderCartComponent;
  let fixture: ComponentFixture<SiderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
