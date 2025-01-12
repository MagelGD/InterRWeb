import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestraComponent } from './maestra.component';

describe('MaestraComponent', () => {
  let component: MaestraComponent;
  let fixture: ComponentFixture<MaestraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestraComponent]
    });
    fixture = TestBed.createComponent(MaestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
