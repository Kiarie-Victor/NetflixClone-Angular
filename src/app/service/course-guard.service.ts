import { Injectable, inject } from "@angular/core";
import { MovieApiServiceService } from "./movie-api-service.service";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class UserToken{}
@Injectable()
export class CourseGuardService{
    canActivate(currentUser: UserToken, userId: string): boolean {
        return false;

      }
}

const canActivateTeam:CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(CourseGuardService).canActivate(inject(MovieApiServiceService), route.params['id']);
}