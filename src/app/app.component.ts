import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.email, Validators.required]);
  phoneNumber = new FormControl('');

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendValues() {
    // Verifica si el formulario es válido
    if (this.form.valid) {
      // Lógica para enviar los valores
      console.log('Enviados correctamente');

      // Muestra una notificación de éxito
      this.toastr.success('Los datos se enviaron correctamente', 'Éxito');
    } else {
      // Muestra una notificación de error si el formulario no es válido
      this.toastr.error(
        'Por favor, complete todos los campos correctamente',
        'Error'
      );
    }
  }
}
