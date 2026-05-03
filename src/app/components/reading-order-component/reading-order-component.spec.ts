import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingOrderComponent } from './reading-order-component';

describe('ReadingOrderComponent', () => {
  let component: ReadingOrderComponent;
  let fixture: ComponentFixture<ReadingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
