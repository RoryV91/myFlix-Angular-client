import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectorFormComponent } from './edit-director-form.component';

describe('EditDirectorFormComponent', () => {
  let component: EditDirectorFormComponent;
  let fixture: ComponentFixture<EditDirectorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDirectorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDirectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
