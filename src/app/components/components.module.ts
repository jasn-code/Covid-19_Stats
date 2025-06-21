import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // ✅ Add this

import { OntarioStatusComponent } from './ontario-status/ontario-status.component';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';

@NgModule({
  declarations: [
    OntarioStatusComponent,
    KeyUpdatesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule 
  ],
  exports: [
    OntarioStatusComponent,
    KeyUpdatesComponent
  ]
})
export class ComponentsModule {}
