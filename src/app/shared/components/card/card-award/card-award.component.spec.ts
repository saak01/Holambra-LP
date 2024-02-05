import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAwardComponent } from './card-award.component';

describe('CardAwardComponent', () => {
  let component: CardAwardComponent;
  let fixture: ComponentFixture<CardAwardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAwardComponent]
    });
    fixture = TestBed.createComponent(CardAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
