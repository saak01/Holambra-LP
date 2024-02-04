import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimeLineComponent } from './card-time-line.component';

describe('CardTimeLineComponent', () => {
  let component: CardTimeLineComponent;
  let fixture: ComponentFixture<CardTimeLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTimeLineComponent]
    });
    fixture = TestBed.createComponent(CardTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
