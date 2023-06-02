import { Component, Input } from '@angular/core';
import { Terminal } from '../../interfaces/terminal.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-update-terminal',
  templateUrl: './update-terminal.component.html',
  styleUrls: ['./update-terminal.component.css']
})
export class UpdateTerminalComponent {

  @Input('terminal')
  terminal!: Terminal;

  constructor(private terminalService: TerminalService){

  }

  terminalOwnerInformation: FormGroup = new FormGroup({
    name: new FormControl(this.terminal?.name),
    lastName: new FormControl(this.terminal?.lastName),
    bornDate: new FormControl(this.terminal?.bornDate),
    cardNumber: new FormControl(this.terminal?.cardNumber),
    bank: new FormControl(this.terminal?.bank),
  });

  // setTerminalFromForm(){
  //   this.terminal.name = this.terminalOwnerInformation.get('name')?.value;
  //   this.terminal.lastName = this.terminalOwnerInformation.get('lastName')?.value;
  //   this.terminal.bornDate = this.terminalOwnerInformation.get('bornDate')?.value;
  //   this.terminal.cardNumber = this.terminalOwnerInformation.get('cardNumber')?.value;
  //   this.terminal.bank = this.terminalOwnerInformation.get('bank')?.value;
  

  // }

  getTerminalFromForm(): Terminal{
    let terminal: Terminal = {
      idTerminal: this.terminal.idTerminal,
      name: this.terminalOwnerInformation.get('name')?.value,
      lastName: this.terminalOwnerInformation.get('lastName')?.value,
      bornDate: this.terminalOwnerInformation.get('bornDate')?.value,
      cardNumber: this.terminalOwnerInformation.get('cardNumber')?.value,
      bank: this.terminalOwnerInformation.get('bank')?.value
    }

    return terminal;
  }
  

  update(){
    // this.setTerminalFromForm();
    let terminal = this.getTerminalFromForm();
    console.log('Antes');
    this.terminalService.update(terminal).subscribe(console.log);
    console.log('Despues');
  }

}
