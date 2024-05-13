import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActorFormComponent } from './edit-actor-form.component';

describe('EditActorFormComponent', () => {
  let component: EditActorFormComponent;
  let fixture: ComponentFixture<EditActorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditActorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditActorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
