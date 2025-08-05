import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveThere } from './have-there';

describe('HaveThere', () => {
  let component: HaveThere;
  let fixture: ComponentFixture<HaveThere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaveThere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveThere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
