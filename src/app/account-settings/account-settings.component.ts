import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class AccountSettingsComponent {
  constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
    ) {
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }

    open(content:any) {
        this.modalService.open(content);
    }

  profilePicture: string = '../../assets/demoProfile.png';
  fullName: string = 'John Doe';
  registrationNumber: string = 'SHS123456';
  form: string = 'Senior';
  programmeStudy: string = 'Science';
  houseName: string = 'Nkrumah House';
  dob: string = '2004-05-16';
  gender: string = 'Male';
  contactNumber: string = '+233 24 123 4567';
  email: string = 'john.doe@example.com';
  address: string = '123 Main Street, Accra, Ghana';
  guardianName: string = 'Jane Doe';
  guardianContactNumber: string = '+233 24 987 6543';
  guardianEmail: string = 'jane.doe@example.com';
  guardianAddress: string = '123 Main Street, Accra, Ghana';

  onInputChange(event: Event, field: string): void {
    const target = event.target as HTMLSpanElement;
    ///this[field] = target.innerText;
  }

  onUploadPicture(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveChanges(): void {
    const details = {
      contactNumber: this.contactNumber,
      email: this.email,
    };
  }
}