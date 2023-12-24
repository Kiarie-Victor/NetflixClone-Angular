import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { SearchComponent } from "../pages/search/search.component";

Injectable()
export class UserToken{}
@Injectable()


export class CanDeactivateService{
    canDeactivate(answer:boolean){
        
        return true
    }
}



export const canDeactivateTeam: CanDeactivateFn<SearchComponent> = (component: SearchComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) =>{
    return inject(CanDeactivateService).canDeactivate(false)
}