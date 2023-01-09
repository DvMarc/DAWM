import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounstroComponent } from './mounstro.component';

describe('MounstroComponent', () => {
  let component: MounstroComponent;
  let fixture: ComponentFixture<MounstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MounstroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MounstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
