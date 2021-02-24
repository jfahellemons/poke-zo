import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VacancyContactComponent} from './vacancy-contact.component';

describe('VacancyContactComponent', () => {
  let component: VacancyContactComponent;
  let fixture: ComponentFixture<VacancyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VacancyContactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
