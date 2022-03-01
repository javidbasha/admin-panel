import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChprojComponent } from './chproj.component';

describe('ChprojComponent', () => {
  let component: ChprojComponent;
  let fixture: ComponentFixture<ChprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChprojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
