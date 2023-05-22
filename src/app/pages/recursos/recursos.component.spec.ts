import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosComponent } from './recursos.component';

describe('RecursosComponent', () => {
  let component: RecursosComponent;
  let fixture: ComponentFixture<RecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosComponent]
    });
    fixture = TestBed.createComponent(RecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
