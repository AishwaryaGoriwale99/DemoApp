import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  submitted = false;
  editingProfile = false;
  age: number = 18;
  interests: string[] = [];
  firstNameValue: string = '';
  lastNameValue: string = '';
  emailValue: string = '';
  mobileValue: string = '';
  stateValue: string = '';
  countryValue: string = '';
  addressType: string = 'Home';
  address1Value: string = '';
  address2Value: string = '';
  companyAddress1Value: string = '';
  companyAddress2Value: string = '';

  updateAge(value: string) {
    this.age = parseInt(value, 10);
  }

  submitForm(firstName: string, lastName: string, email: string, mobile: string, age: number, state: string, country: string, interests: string[], subscribe: boolean) {
    this.submitted = true;
    this.firstNameValue = firstName;
    this.lastNameValue = lastName;
    this.emailValue = email;
    this.mobileValue = mobile;
    this.stateValue = state;
    this.countryValue = country;
    this.interests = interests;
    // Handle other form data as needed
  }

  editProfile() {
    this.editingProfile = true;
  }

  cancelEdit() {
    this.editingProfile = false;
  }

  saveProfile() {
    this.editingProfile = false;
    // Save profile data
  }

  editPhoto() {
    // Implement photo editing functionality
  }

}
