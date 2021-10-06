import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { ModelSComponent } from './modelS/modelS.component.';
import { ModelYComponent } from './modelY/modelY.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { modelSbuttonComponent } from './header/modelSbutton.component';
import { modelYbuttonComponent } from './header/modelYbutton.component';
import { model3buttonComponent } from './header/model3button.component';
import { modelXbuttonComponent } from './header/modelXbutton.component';
import { AppRoutingModule } from './app-routing.module';
import { SolarRoofComponent } from './header/solarRoof.component';
import { SolarPanelsComponent } from './header/solarPanels.component';
import { modelSLayoutComponent } from './layout/modelSlayout.component';
import { model3LayoutComponent } from './layout/model3layout.component';
import { HomeComponent } from './layout/home.component';
import { modelXLayoutComponent } from './layout/modelXlayout.component';
import { modelYLayoutComponent } from './layout/modelYlayout.component';
import { SolarRoofLayoutComponent } from './layout/solarRooflayout.component';
import { SolarPanelsLayoutComponent } from './layout/solarPanelslayout.component';
import { ProductComponent } from './body/product-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    ModelSComponent,
    ModelYComponent,
    LayoutMainComponent,
    modelSbuttonComponent,
    model3buttonComponent,
    modelXbuttonComponent,
    modelYbuttonComponent,
    SolarRoofComponent,
    SolarPanelsComponent,
    HomeComponent,
    modelSLayoutComponent,
    model3LayoutComponent,
    modelXLayoutComponent,
    modelYLayoutComponent,
    SolarRoofLayoutComponent,
    SolarPanelsLayoutComponent,
    ProductComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
