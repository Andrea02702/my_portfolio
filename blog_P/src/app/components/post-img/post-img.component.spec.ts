import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImgComponent } from './post-img.component';

describe('PostImgComponent', () => {
  let component: PostImgComponent;
  let fixture: ComponentFixture<PostImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostImgComponent]
    });
    fixture = TestBed.createComponent(PostImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
