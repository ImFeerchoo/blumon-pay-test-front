import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';
import { Terminal } from '../../interfaces/terminal.interface';

@Component({
  selector: 'app-terminal-request-form',
  templateUrl: './terminal-request-form.component.html',
  styleUrls: ['./terminal-request-form.component.css']
})
export class TerminalRequestFormComponent {

  constructor (private terminalService: TerminalService){}

  terminalOwnerInformation = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    fechaDeNacimiento: new FormControl(''),
    numeroDeTarjeta: new FormControl(''),
    bancoEmisor: new FormControl('')
  });

  getTerminalFromForm(): Terminal{
    let terminal: Terminal = {
      idTerminal: null,
      name: this.terminalOwnerInformation.get('name')?.value,
      lastName: this.terminalOwnerInformation.get('lastName')?.value,
      bornDate: this.terminalOwnerInformation.get('fechaDeNacimiento')?.value,
      cardNumber: this.terminalOwnerInformation.get('numeroDeTarjeta')?.value,
      bank: this.terminalOwnerInformation.get('bancoEmisor')?.value
    }

    return terminal;
  }

  submitInformation(){

    let terminal = this.getTerminalFromForm();
    this.terminalService.save(terminal)
      .subscribe();

    console.log(terminal);

  }

}
