import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInvocationComponent } from './test-invocation.component';

describe('TestInvocationComponent', () => {
  let component: TestInvocationComponent;
  let fixture: ComponentFixture<TestInvocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInvocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
