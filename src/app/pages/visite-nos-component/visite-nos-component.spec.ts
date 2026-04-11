import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteNosComponent } from './visite-nos-component';

describe('VisiteNosComponent', () => {
  let component: VisiteNosComponent;
  let fixture: ComponentFixture<VisiteNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiteNosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
