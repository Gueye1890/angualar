import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CatalogueService } from './services/catalogue.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: CatalogueService , private router: Router)  {}

  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {

    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/connexion']);
      return false;
    }
  }

}
