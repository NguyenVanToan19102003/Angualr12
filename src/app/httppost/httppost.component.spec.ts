import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttppostComponent } from './httppost.component';

describe('HttppostComponent', () => {
  let component: HttppostComponent;
  let fixture: ComponentFixture<HttppostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttppostComponent]
    });
    fixture = TestBed.createComponent(HttppostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
