import { CanActivateFn } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(ApiserviceService).session)return true;

  return false;
};
