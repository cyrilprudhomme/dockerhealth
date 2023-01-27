import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DockerPage} from './docker.page';

const routes: Routes = [
  {
    path: '',
    component: DockerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DockerPageRoutingModule {
}
