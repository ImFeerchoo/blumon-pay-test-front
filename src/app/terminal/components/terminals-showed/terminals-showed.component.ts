import { Component, OnInit } from '@angular/core';
import { TerminalService } from '../../services/terminal.service';
import { Terminal } from '../../interfaces/terminal.interface';

@Component({
  selector: 'app-terminals-showed',
  templateUrl: './terminals-showed.component.html',
  styleUrls: ['./terminals-showed.component.css']
})
export class TerminalsShowedComponent implements OnInit {

  terminals: Terminal[] = [];

  selectedTerminal!: Terminal;

  constructor(private terminalService: TerminalService){

  }

  ngOnInit(): void {
      this.getTerminals();
  }

  selectTerminal(id: number){

    for(let i = 0; i < this.terminals.length; i++){
      if(this.terminals[i].idTerminal === id){
        this.selectedTerminal = this.terminals[i];
        console.log();
        break;
      }
    }
  }

  getTerminals(){
    console.log('GetTerminals');
    this.terminalService.findAll()
        .subscribe(data => this.terminals = data);
  }

  delete(id: number): void{
    console.log('Se va a eliminar el id: ' + id);
    this.terminalService.delete(id)
      .subscribe(() => {
        this.getTerminals();
      });
  }


}
