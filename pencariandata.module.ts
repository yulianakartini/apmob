import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PencariandataPageRoutingModule } from './pencariandata-routing.module';

import { PencariandataPage } from './pencariandata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PencariandataPageRoutingModule
  ],
  declarations: [PencariandataPage]
})
export class PencariandataPageModule {}
