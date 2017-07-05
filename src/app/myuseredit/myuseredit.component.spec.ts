import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusereditComponent } from './myuseredit.component';

describe('MyusereditComponent', () => {
  let component: MyusereditComponent;
  let fixture: ComponentFixture<MyusereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyusereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyusereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
