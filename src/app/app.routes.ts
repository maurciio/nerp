import { Routes } from '@angular/router';
import { SettingsComponent } from './admin/settings/settings.component';
import { SalesComponent } from './sales/sales.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './admin/profile/profile.component';

export const routes: Routes = [
    {
        path: 'admin', children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'support', component: AdminComponent },
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: 'sales', component: SalesComponent },
    { path: 'accounting', component: AccountingComponent },
    { path: 'inventory', component: InventoryComponent  },
    { path: 'support', component: SupportComponent  },
    
    // Ruta por defecto al iniciar la aplicación
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];