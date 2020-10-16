import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutePageRoutingModule } from './institute-routing.module';

import { InstitutePage } from './institute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutePageRoutingModule
  ],
  declarations: [InstitutePage]
})
export class InstitutePageModule {}
