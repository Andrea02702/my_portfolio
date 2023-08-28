import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortbComponent } from './portb.component';

describe('PortbComponent', () => {
  let component: PortbComponent;
  let fixture: ComponentFixture<PortbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortbComponent]
    });
    fixture = TestBed.createComponent(PortbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
