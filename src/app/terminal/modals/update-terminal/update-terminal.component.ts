import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Terminal } from '../../interfaces/terminal.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TerminalService } from '../../services/terminal.service';

@Component({
  selector: 'app-update-terminal',
  templateUrl: './update-terminal.component.html',
  styleUrls: ['./update-terminal.component.css']
})
export class UpdateTerminalComponent implements OnChanges {

  @Input('terminal')
  terminal!: Terminal;

  @Output('terminalUpdatedEvent')
  terminalUpdatedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  name = this.terminal?.name;
  lastName = this.terminal?.lastName;
  bornDate = this.terminal?.bornDate;
  cardNumber = this.terminal?.cardNumber;
  bank = this.terminal?.bank;

  terminalOwnerInformation: FormGroup = new FormGroup({
    name: new FormControl(this.terminal?.name, [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl(this.terminal?.lastName, [Validators.required, Validators.minLength(1)]),
    bornDate: new FormControl(this.terminal?.bornDate, [Validators.required]),
    cardNumber: new FormControl(this.terminal?.cardNumber, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    bank: new FormControl(this.terminal?.bank, [Validators.required, Validators.minLength(1)]),
  });

  constructor(private terminalService: TerminalService){

  }

  ngOnChanges(): void {

    if(this.terminal){
      this.terminalOwnerInformation.get('name')?.setValue(this.terminal.name);
      this.terminalOwnerInformation.get('lastName')?.setValue(this.terminal.lastName);
      this.terminalOwnerInformation.get('bornDate')?.setValue(this.terminal.bornDate);
      this.terminalOwnerInformation.get('cardNumber')?.setValue(this.terminal.cardNumber);
      this.terminalOwnerInformation.get('bank')?.setValue(this.terminal.bank);
    }
  }

  isInvalidField( field: string ): boolean | null {
    let controls = this.terminalOwnerInformation.controls;
    return this.terminalOwnerInformation.controls[field as keyof typeof controls].invalid &&
    this.terminalOwnerInformation.controls[field as keyof typeof controls]?.touched;
  }

  

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

    // console.log("Name: " + this.terminalOwnerInformation.get('name')?.value);

    return terminal;
  }
  

  update(){
    // this.setTerminalFromForm();


    let terminal = this.getTerminalFromForm();

    console.log('Antes');
    console.log(terminal);
    this.terminalService.update(terminal).subscribe( _ => {
      this.terminalUpdatedEvent.emit(true);
    });
    
    console.log('Despues');
  }

}
