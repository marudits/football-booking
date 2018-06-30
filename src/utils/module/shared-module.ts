import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterializeDirective } from "angular2-materialize";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ MaterializeDirective ],
  exports:      [ CommonModule, FormsModule, MaterializeDirective ]
})
export class SharedModule { }