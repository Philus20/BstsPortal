import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPreviewModalComponent } from './print-preview-modal.component';

describe('PrintPreviewModalComponent', () => {
  let component: PrintPreviewModalComponent;
  let fixture: ComponentFixture<PrintPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintPreviewModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
