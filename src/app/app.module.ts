import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { NavbarComponent } from './immobilier/navbar/navbar.component';
import { FooterComponent } from './immobilier/footer/footer.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { RechercheComponent } from './immobilier/recherche/recherche.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CatalogueService } from './services/catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { FormbienComponent } from './immobilier/formbien/formbien.component';
import { MatCheckboxModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { DetailBienComponent } from './immobilier/detail-bien/detail-bien.component';
import { RouterModule} from '@angular/router';
import { InscriptionComponent } from './immobilier/inscription/inscription.component';
import { ConnexionComponent } from './immobilier/connexion/connexion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import { RecherchePipe } from './recherche.pipe';
import {MatTableModule} from '@angular/material/table';
import { AgentComponent } from './immobilier/agent/agent.component';
import { ContratComponent } from './immobilier/contrat/contrat.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './administrateur/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    NavbarComponent,
    FooterComponent,
    CatalogueComponent,
    RechercheComponent,
    FormbienComponent,
    DetailBienComponent,
    InscriptionComponent,
    ConnexionComponent,
    RecherchePipe,
    AgentComponent,
    ContratComponent,
    AdministrateurComponent,
    ClientComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [CatalogueService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
