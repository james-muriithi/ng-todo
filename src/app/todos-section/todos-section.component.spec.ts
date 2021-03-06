import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSectionComponent } from './todos-section.component';

describe('TodosSectionComponent', () => {
  let component: TodosSectionComponent;
  let fixture: ComponentFixture<TodosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
