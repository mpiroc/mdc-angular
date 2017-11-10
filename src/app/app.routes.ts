import { Routes } from '@angular/router'
import { DecksRoute } from '../routes/decks/decks-route.component'
import { HomeRoute } from '../routes/home/home-route.component'

export const AppRoutes: Routes = [
  { path: 'home', component: HomeRoute },
  { path: 'decks', component: DecksRoute },
  { path: '**', redirectTo: 'home' },
]
