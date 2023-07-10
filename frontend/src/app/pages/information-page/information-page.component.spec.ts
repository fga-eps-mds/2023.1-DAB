import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { InformationPageComponent } from './information-page.component';

describe('InformationPageComponent', () => {
  let component: InformationPageComponent;
  let fixture: ComponentFixture<InformationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InformationPageComponent,
        HeaderComponent
      ]
    });
    fixture = TestBed.createComponent(InformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
