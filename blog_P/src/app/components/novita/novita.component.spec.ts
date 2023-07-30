import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovitaComponent } from './novita.component';

describe('NovitaComponent', () => {
  let component: NovitaComponent;
  let fixture: ComponentFixture<NovitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovitaComponent]
    });
    fixture = TestBed.createComponent(NovitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
