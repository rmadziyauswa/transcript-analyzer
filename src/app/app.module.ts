import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { ParameterBarComponent } from './Components/parameter-bar/parameter-bar.component';
import { EmptyStateComponent } from './Components/empty-state/empty-state.component';
import { SensitivityMeterComponent } from './Components/sensitivity-meter/sensitivity-meter.component';
import { CustomDropdownComponent } from './Components/custom-dropdown/custom-dropdown.component';
import { SubScriptComponent } from './Components/sub-script/sub-script.component';
import { TransacriptAnalyzerComponent } from './Components/transacript-analyzer/transacript-analyzer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParameterBarComponent,
    EmptyStateComponent,
    SensitivityMeterComponent,
    CustomDropdownComponent,
    SubScriptComponent,
    TransacriptAnalyzerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
