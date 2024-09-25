import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavigationComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  email: string = 'usuario@correo.com';
  telefono: string = '+1234567890';

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  formGroup: FormGroup = new FormGroup({
    email: new FormControl(this.email, [
      Validators.required,
      Validators.email
    ]),
    telefono: new FormControl(this.telefono, [
      Validators.required,
      Validators.pattern(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/)
    ])
  });

  formGroupChangePass: FormGroup = new FormGroup({
    currentPassword: new FormControl(this.currentPassword, [Validators.required]),
    newPassword: new FormControl(this.newPassword, [Validators.required]),
    confirmPassword: new FormControl(this.confirmPassword, [Validators.required, Validators.required])
  });

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Formulario enviado con los siguientes datos:', this.formGroup.value);
      // Aquí puedes hacer lo que necesites, como enviar los datos a un servidor.
    } else {
      console.log('Formulario inválido');
    }
  }

  onSubmitPass(){
    if (this.formGroupChangePass.valid) {
      console.log('Cambio de contraseña enviado con los siguientes datos:', this.formGroupChangePass.value);
      // Aquí puedes hacer lo que necesites, como enviar los datos a un servidor.
    } else {
      console.log('Formulario de cambio de contraseña inválido');
    }
  }
}
