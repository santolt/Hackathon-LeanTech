import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SudokuRoutingModule } from './sudoku-routing.module';
import { SudokuComponent } from './sudoku.component';


@NgModule({
  declarations: [
    SudokuComponent
  ],
  imports: [
    CommonModule,
    SudokuRoutingModule
  ]
})
export class SudokuModule { }
