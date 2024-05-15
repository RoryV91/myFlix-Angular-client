import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectorFormComponent } from './new-director-form.component';

describe('NewDirectorFormComponent', () => {
  let component: NewDirectorFormComponent;
  let fixture: ComponentFixture<NewDirectorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDirectorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDirectorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
