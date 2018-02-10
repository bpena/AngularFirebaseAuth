import {RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';

const ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'},
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  }
];

export const AppRouter = RouterModule.forRoot(ROUTES, { useHash: false });
