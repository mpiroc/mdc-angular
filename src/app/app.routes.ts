import { Routes } from '@angular/router'
import { HomeRoute } from '../routes/home/home-route.component'

export const AppRoutes: Routes = [
  { path: '', component: HomeRoute },
  { path: '**', redirectTo: '' },
]
