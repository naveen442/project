import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanthoshService {
fathername:any;
fatherage:any;
setparentname(name:any):void{
  this.fathername=name;
}
setparentage(age:any):void{
  this.fatherage=age;
}
getparentname():any{
  return this.fathername;
}
getparentage():any{
  return this.fatherage;
}
  constructor() { }
}
