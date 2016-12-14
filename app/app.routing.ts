import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: MainPageComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
