import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyYodaComponent } from './baby-yoda.component';

describe('BabyYodaComponent', () => {
  let component: BabyYodaComponent;
  let fixture: ComponentFixture<BabyYodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyYodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
