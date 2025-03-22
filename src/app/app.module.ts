import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  // Déclare les composants qui appartiennent à ce module
  declarations: [
    AppComponent,    // Composant principal de l'application
    LoginComponent,  // Composant pour la page de connexion
    SignupComponent, // Composant pour la page d'inscription
    HomeComponent    // Composant pour la page d'accueil
  ],
  
  // Liste des modules importés nécessaires au fonctionnement de l'application
  imports: [
    BrowserModule,    // Module de base pour exécuter l'application dans un navigateur
    AppRoutingModule, // Module gérant la navigation et le routage
    HttpClientModule, // Module permettant d'effectuer des requêtes HTTP (API, backend)
    FormsModule       // Module pour gérer les formulaires et la liaison de données
  ],
  
  // Liste des services disponibles au sein du module (vide ici)
  providers: [],
  
  // Définit le composant principal qui sera chargé au démarrage de l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
