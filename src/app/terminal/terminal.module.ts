import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalRequestFormComponent } from './components/terminal-request-form/terminal-request-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TerminalsShowedComponent } from './components/terminals-showed/terminals-showed.component';
import { UpdateTerminalComponent } from './modals/update-terminal/update-terminal.component';

// const routes: Routes = [
//   {
//     path: 'terminal',
//     component: TerminalRequestFormComponent
//   }
// ]

@NgModule({
  declarations: [
    TerminalRequestFormComponent,
    TerminalsShowedComponent,
    UpdateTerminalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    // RouterModule.forRoot(routes)
  ],
  exports: [
    TerminalRequestFormComponent,
    TerminalsShowedComponent
  ]
})
export class TerminalModule { 

}
