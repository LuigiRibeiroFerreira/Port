import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanSwitchComponent } from './ocean-switch.component';

describe('OceanSwitchComponent', () => {
  let component: OceanSwitchComponent;
  let fixture: ComponentFixture<OceanSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
