import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseOperating } from '../services/api.service';
import { ContentService } from '../services/content.service';
import { ResponseContentHeaders } from '../responses';

@Injectable({ providedIn: 'root' })
export class ContentHeaderResolver implements Resolve<ResponseContentHeaders> {
  constructor(private contentService: ContentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.contentService.getContentHeader();
  }
}
