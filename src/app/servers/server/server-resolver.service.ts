import { Resolve } from "@angular/router";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

export interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ): Server | import("rxjs").Observable<Server> | Promise<Server> {
    return this.serversService.getServer(+route.params["id"]);
  }
}
