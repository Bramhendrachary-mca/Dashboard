import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,  },
  { path: 'profile', component: ProfileComponent,  },
  { path: 'search', component: SearchComponent,  },
  { path: 'history', component: HistoryComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }