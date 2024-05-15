import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewActorFormComponent } from './new-actor-form.component';

describe('NewActorFormComponent', () => {
  let component: NewActorFormComponent;
  let fixture: ComponentFixture<NewActorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewActorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewActorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
