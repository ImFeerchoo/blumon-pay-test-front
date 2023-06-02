import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-terminal-request-form',
  templateUrl: './terminal-request-form.component.html',
  styleUrls: ['./terminal-request-form.component.css']
})
export class TerminalRequestFormComponent {

  terminalOwnerInformation = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    fechaDeNacimiento: new FormControl(''),
    numeroDeTarjeta: new FormControl(''),
    bancoEmisor: new FormControl(''),
  });



  submitInformation(){
    console.log(this.terminalOwnerInformation.get('name')?.value);
    console.log(this.terminalOwnerInformation.get('lastName')?.value);
    console.log(this.terminalOwnerInformation.get('fechaDeNacimiento')?.value);
    console.log(this.terminalOwnerInformation.get('numeroDeTarjeta')?.value);
    console.log(this.terminalOwnerInformation.get('bancoEmisor')?.value);
  }

}
