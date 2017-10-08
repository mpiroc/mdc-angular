import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { FormFieldModule } from '../mdc/form-field/form-field.module'
import { CheckboxModule } from '../mdc/checkbox/checkbox.module'

import { AppComponent } from './app.component'
import { HomeRoute } from '../routes/home/home-route.component'

import { AppRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeRoute,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    FormFieldModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
