import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChallengeComponent } from './card-challenge.component';

describe('CardChallengeComponent', () => {
  let component: CardChallengeComponent;
  let fixture: ComponentFixture<CardChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardChallengeComponent]
    });
    fixture = TestBed.createComponent(CardChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
