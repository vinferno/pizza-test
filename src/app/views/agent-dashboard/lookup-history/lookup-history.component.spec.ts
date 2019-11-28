import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupHistoryComponent } from './lookup-history.component';

describe('LookupHistoryComponent', () => {
  let component: LookupHistoryComponent;
  let fixture: ComponentFixture<LookupHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
