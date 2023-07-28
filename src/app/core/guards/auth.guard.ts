import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  createUrlTreeFromSnapshot
} from '@angular/router';

// export const authResolver: ResolveFn<null | UrlTree> =
//   (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

//     switch(state.url) {
//       case '/auth/signup':
//         return null;
//       case '/auth/login':
//         return null;
//       default:
//         createUrlTreeFromSnapshot(route, ['/']);
//         return null;
//     }

// }

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  switch (state.url) {
    case '/auth/signup':
      return true;
    case '/auth/login':
      return true;
    default:
      return createUrlTreeFromSnapshot(route, ['/']);
  }
};
