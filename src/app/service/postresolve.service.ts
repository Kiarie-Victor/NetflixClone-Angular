import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { PostCardService } from "./postcard.service";

@Injectable()
export class PostResolveService{
    constructor(private service:PostCardService){}

    getHero(id: string) {
        return this.service.getAllPostCards().then((data)=>{
            return data;
        })
}
}

export const canResolveGuard: ResolveFn<any> = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    return inject(PostResolveService).getHero(route.params['id'])
}