import { AdministrateurComponent } from './administrateur/administrateur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailBienComponent } from './immobilier/detail-bien/detail-bien.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { ConnexionComponent } from './immobilier/connexion/connexion.component';
import { InscriptionComponent } from './immobilier/inscription/inscription.component';
import { AgentComponent } from './immobilier/agent/agent.component';
import { ContratComponent } from './immobilier/contrat/contrat.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './administrateur/client/client.component';
const routes: Routes = [
  { path: 'detailbien/:id', component: DetailBienComponent },
  { path: 'accueil', component: ImmobilierComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'inscription', component:  InscriptionComponent },
  { path: 'admin', component:  AdministrateurComponent , canActivate : [AuthGuard]},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'Agent', component: AgentComponent },
  { path: 'Client', component: ClientComponent },
  { path: 'contrat', component: ContratComponent },



];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   ],
  declarations: []
})
export class AppRoutingModule { }
