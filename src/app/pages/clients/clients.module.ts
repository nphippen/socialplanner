import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';




@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
  ],
  declarations: [
    ClientsComponent,
    ClientListComponent,
  ],
})
export class ClientsModule { }
