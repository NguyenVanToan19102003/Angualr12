import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetpageComponent } from './http-getpage.component';

describe('HttpGetpageComponent', () => {
  let component: HttpGetpageComponent;
  let fixture: ComponentFixture<HttpGetpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpGetpageComponent]
    });
    fixture = TestBed.createComponent(HttpGetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
