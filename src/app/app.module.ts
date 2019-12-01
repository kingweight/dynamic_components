import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material'
import { MatSelectModule } from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MytextComponent } from './mytext/mytext.component'
import { ComponentA } from './component-a/component-a.component'
import { ComponentB } from './component-b/component-b.component'

@NgModule({
  declarations: [
    AppComponent,
    MytextComponent,
    ComponentA,
    ComponentB
  ],
  imports: [
    //FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[
    ComponentA,
    ComponentB
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
