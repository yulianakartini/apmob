import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PencariandataPage } from './pencariandata.page';

const routes: Routes = [
  {
    path: '',
    component: PencariandataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PencariandataPageRoutingModule {}
