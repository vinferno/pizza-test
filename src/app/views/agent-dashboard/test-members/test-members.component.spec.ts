import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMembersComponent } from './test-members.component';

describe('TestMembersComponent', () => {
  let component: TestMembersComponent;
  let fixture: ComponentFixture<TestMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
