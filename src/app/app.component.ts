import { Component, OnInit, ViewChild, ɵɵInheritDefinitionFeature } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countrylist=[{'countryname':'INDIA'},{'countryname':'USA'},{'countryname':'LONDON'}];
 citylist=[{'cityname':'namakkal'},{'cityname':'cbe'}];
  title = 'firstapp';

userform:FormGroup;
  constructor(){
  
  }
  ngOnInit(){
this.userform=new FormGroup({'fname':new FormControl(null,Validators.required),'lname':new FormControl(null),
'email':new FormControl(null,[Validators.required,Validators.email]),'gender':new FormControl('male'),'married':new FormControl(null),
  'country':new FormControl(null),'city':new FormControl(null),'street':new FormControl(null),
  'pincode':new FormControl(null)});
  } 
  onSubmit(){
    console.log(this.userform);
  }
}
