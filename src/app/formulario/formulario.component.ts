import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  


  confirmSubmit() {
    if (window.confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      this.onSubmit();
    }
  }

  onSubmit() {
    // Navegar al componente ResultadoComponent y pasar los datos del formulario como parámetros
    this.router.navigate(['/resultado'], { queryParams: { nombre: this.nombre, email: this.email } });
  }

  isValidForm() {
    return this.nombre.trim().length > 0 && this.validateEmail(this.email);
  }

  validateEmail(email: string): boolean {
    // Implementa aquí la validación del formato de correo electrónico que desees
    // Puedes usar expresiones regulares o alguna librería de validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}


