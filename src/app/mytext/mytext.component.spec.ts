import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytextComponent } from './mytext.component';

describe('MytextComponent', () => {
  let component: MytextComponent;
  let fixture: ComponentFixture<MytextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
