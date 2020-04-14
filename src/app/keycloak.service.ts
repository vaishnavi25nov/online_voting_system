import { Injectable } from '@angular/core';
declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  constructor() { }

  private keycloakAuth: any;
  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        "realm": "ies",
        "auth-server-url": "https://accounts.psgcas.ac.in/auth",
        "url": "https://accounts.psgcas.ac.in/auth",
        "ssl-required": "external",
        "resource": "ies_courses",
        "clientId": "ies_courses",
        "public-client": true
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
          alert("Authenticated");
        })
        .error(() => {
          reject();
          alert("Unauthorized");
        });
    });
  }
}
