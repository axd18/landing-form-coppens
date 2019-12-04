import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  createFormGroup() {

      return new  FormGroup ({
      email : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      razonSocial : new FormControl('', [Validators.required]),
      nombreComercio : new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      provincia: new FormControl('', [Validators.required]),
      localidad: new FormControl('', [Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      
    });
  }
  
  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();

   }

  ngOnInit() {
  }
  onResetForm() {

      this.contactForm.reset();
    }


  onSavedForm() {
    if (this.contactForm.valid) {
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
      console.log('Valid');
    } else {
      console.log('Not Valid');
    }

  }
  
  get razonSocial() { return this.contactForm.get('razonSocial'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get nombreComercio() { return this.contactForm.get('nombreComercio');}
  get telefono() {return this.contactForm.get('telefono');}
  get provincia() {return this.contactForm.get('provincia');}
  get localidad() { return this.contactForm.get('localidad');}
  get direccion() {return this.contactForm.get('direccion');}


  mensajeEnviado(){
    alert('Gracias. Tu mensaje ha sido enviado. Si tenés más sucursales, podés seguir completando el formulario.');
  }

}


      





