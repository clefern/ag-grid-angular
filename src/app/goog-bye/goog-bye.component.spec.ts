import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogByeComponent } from './goog-bye.component';

describe('GoogByeComponent', () => {
  let component: GoogByeComponent;
  let fixture: ComponentFixture<GoogByeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogByeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogByeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
