import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  [x: string]: any;
  errorMessage: string | null = null;
  imageSrc: string | ArrayBuffer | null = null;
  interests: any;

  closeWindow() {
    window.close();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        this.errorMessage = 'Please select an image file.';
        this.imageSrc = null;
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const img = new Image();
        img.onload = () => {
          if (img.width !== 310 || img.height !== 325) {
            this.errorMessage = 'Image dimensions must be 310x325 pixels.';
            this.imageSrc = null;
          } else {
            this.errorMessage = null;
            this.imageSrc = e.target.result;
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitted = false;
  age: number = 18;
  firstNameValue: string = '';
  lastNameValue: string = '';
  emailValue: string = '';
  mobileValue: string = '';
  stateValue: string = '';
  countryValue: string = '';
  interestValue: string = '';
  subscribeValue: boolean = false;

  updateAge(value: string) {
    this.age = parseInt(value, 10);
  }

  submitForm(firstName: string, lastName: string, email: string, mobile: string, age: number, state: string, country: string, interest: string, subscribe: boolean) {
    this.submitted = true;
    this.firstNameValue = firstName;
    this.lastNameValue = lastName;
    this.emailValue = email;
    this.mobileValue = mobile;
    this.stateValue = state;
    this.countryValue = country;
    this.interestValue = interest;
    this.subscribeValue = subscribe;
  }
  removeInterest(index: number) {
    this.interests.splice(index, 1);
  }

  cancel() {
   
    this.submitted = false;
  }

  editingProfile = false;
  editingPhoto = false;
  newPhoto: string | ArrayBuffer | null = null;

  editProfile() {
    this.editingProfile = true;
  }

  editPhoto() {
    this.editingPhoto = true;
  }

  savePhoto() {
    
    this.editingPhoto = false;
    
    this.newPhoto = null;
  }

  cancelEditPhoto() {
    
    this.newPhoto = null;
    this.editingPhoto = false;
  }
  btnClick=  () => {
    this['router'].navigateByUrl('/profile');
};

  
}
