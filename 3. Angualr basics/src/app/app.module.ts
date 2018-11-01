import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DatabindingProblemComponent } from './databinding-problem/databinding-problem.component';
import { DirectiveProblemComponent } from './directive-problem/directive-problem.component';
// import { WarningComponent } from './warning/warning.component';
// import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DatabindingProblemComponent,
    DirectiveProblemComponent
    // WarningComponent,
    // SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
