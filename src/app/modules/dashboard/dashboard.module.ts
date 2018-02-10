import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from './dashboard.roter';
import { MatButtonModule } from '@angular/material';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  imports: [
    DashboardRouter,
    MatButtonModule
  ],
  declarations: [DashboardComponent],
  providers: [AuthService]
})
export class DashboardModule { }
