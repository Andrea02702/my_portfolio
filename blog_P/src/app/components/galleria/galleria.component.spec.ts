import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriaComponent } from './galleria.component';

describe('GalleriaComponent', () => {
  let component: GalleriaComponent;
  let fixture: ComponentFixture<GalleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleriaComponent]
    });
    fixture = TestBed.createComponent(GalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
