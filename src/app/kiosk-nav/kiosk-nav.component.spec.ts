import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KioskNavComponent } from './kiosk-nav.component';

describe('KioskNavComponent', () => {
  let component: KioskNavComponent;
  let fixture: ComponentFixture<KioskNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KioskNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
