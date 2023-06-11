import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPageComponent } from './information-page.component';

describe('InformationPageComponent', () => {
  let component: InformationPageComponent;
  let fixture: ComponentFixture<InformationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationPageComponent]
    });
    fixture = TestBed.createComponent(InformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
