import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalRequestFormComponent } from './components/terminal-request-form/terminal-request-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// const routes: Routes = [
//   {
//     path: 'terminal',
//     component: TerminalRequestFormComponent
//   }
// ]

@NgModule({
  declarations: [
    TerminalRequestFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    // RouterModule.forRoot(routes)
  ],
  exports: [
    TerminalRequestFormComponent  
  ]
})
export class TerminalModule { 

}
