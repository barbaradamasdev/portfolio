import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbuttonComponent } from './topbutton.component';

describe('TopbuttonComponent', () => {
  let component: TopbuttonComponent;
  let fixture: ComponentFixture<TopbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
