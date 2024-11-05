import { Injectable } from '@angular/core';
 
import { USERS } from './mock-users';
 
@Injectable()
export class UserService {
 
  constructor() { }
 
  getUsers(){
    return USERS;
  }
 
  getUser(id:number|string){
    return USERS.filter(
      function(user,i){    
        return user.id == id ? user : null;
      }
    );    
  }
 
}