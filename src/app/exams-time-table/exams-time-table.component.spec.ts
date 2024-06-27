import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsTimeTableComponent } from './exams-time-table.component';

describe('ExamsTimeTableComponent', () => {
  let component: ExamsTimeTableComponent;
  let fixture: ComponentFixture<ExamsTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsTimeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
