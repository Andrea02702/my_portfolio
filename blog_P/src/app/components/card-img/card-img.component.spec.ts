import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImgComponent } from './card-img.component';

describe('CardImgComponent', () => {
  let component: CardImgComponent;
  let fixture: ComponentFixture<CardImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardImgComponent]
    });
    fixture = TestBed.createComponent(CardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
