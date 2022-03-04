import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployComponent } from './pages/employ/employ.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { FormRoutingModule } from './form-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    EmployComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
})
export class FormModule {}
