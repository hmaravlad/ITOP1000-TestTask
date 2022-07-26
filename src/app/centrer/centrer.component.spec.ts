import { ComponentFixture, TestBed } from '@angular/core/testing';

import CentrerComponent from './centrer.component';

describe('CentrerComponent', () => {
  let component: CentrerComponent;
  let fixture: ComponentFixture<CentrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentrerComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
