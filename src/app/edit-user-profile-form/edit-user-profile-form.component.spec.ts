import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserProfileFormComponent } from './edit-user-profile-form.component';

describe('EditUserProfileFormComponent', () => {
  let component: EditUserProfileFormComponent;
  let fixture: ComponentFixture<EditUserProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserProfileFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
