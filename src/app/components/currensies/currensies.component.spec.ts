import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrensiesComponent } from './currensies.component';

describe('CurrensiesComponent', () => {
  let component: CurrensiesComponent;
  let fixture: ComponentFixture<CurrensiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrensiesComponent]
    });
    fixture = TestBed.createComponent(CurrensiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
