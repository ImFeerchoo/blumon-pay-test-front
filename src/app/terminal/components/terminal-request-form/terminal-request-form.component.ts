import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';
import { Terminal } from '../../interfaces/terminal.interface';

@Component({
  selector: 'app-terminal-request-form',
  templateUrl: './terminal-request-form.component.html',
  styleUrls: ['./terminal-request-form.component.css']
})
export class TerminalRequestFormComponent {

  @Output('terminalSaved')
  terminalSavedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor (private terminalService: TerminalService){}

  terminalOwnerInformation = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    fechaDeNacimiento: new FormControl('', [Validators.required]),
    numeroDeTarjeta: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    bancoEmisor: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  isInvalidField( field: string ): boolean | null {
    let controls = this.terminalOwnerInformation.controls;
    return this.terminalOwnerInformation.controls[field as keyof typeof controls].invalid &&
    this.terminalOwnerInformation.controls[field as keyof typeof controls]?.touched;
  }

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
      .subscribe( _ => {
        this.terminalSavedEvent.emit(true);
      });

    console.log(terminal);

  }

}
