import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home.component';
import { modelSLayoutComponent } from './layout/modelSlayout.component';
import { model3LayoutComponent } from './layout/model3layout.component';
import { modelXLayoutComponent } from './layout/modelXlayout.component';
import { modelYLayoutComponent } from './layout/modelYlayout.component';
import { SolarRoofLayoutComponent } from './layout/solarRooflayout.component';
import { SolarPanelsLayoutComponent } from './layout/solarPanelslayout.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent },
{ path: 'auth', component: AuthComponent},
{ path: 'modelSlayout', component: modelSLayoutComponent},
{ path: 'model3layout', component: model3LayoutComponent},
{ path: 'modelXlayout', component: modelXLayoutComponent},
{ path: 'modelYlayout', component: modelYLayoutComponent},
{ path: 'solarRooflayout', component: SolarRoofLayoutComponent},
{ path: 'solarPanelslayout', component: SolarPanelsLayoutComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
