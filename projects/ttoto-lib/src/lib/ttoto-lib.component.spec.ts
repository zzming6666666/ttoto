import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtotoLibComponent } from './ttoto-lib.component';

describe('TtotoLibComponent', () => {
  let component: TtotoLibComponent;
  let fixture: ComponentFixture<TtotoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtotoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtotoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
