import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplaceComponent } from './travelplace.component';

describe('TravelplaceComponent', () => {
  let component: TravelplaceComponent;
  let fixture: ComponentFixture<TravelplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
