import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../model/user.model";

@Injectable({providedIn: 'root'})
export class UserService {
  // public user = new BehaviorSubject<User>({name: null, email: null});

  constructor() {}
}
