import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SanthoshService } from '../santhosh.service';
@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  parentname:any;
  parentage:any;
  constructor(private manoj:SanthoshService,private route:ActivatedRoute) { }
  ngOnInit(): void {
   this.parentname= this.manoj.getparentname();
   this.parentage= this.manoj.getparentage();
   this.route.snapshot.params['age'];
  }
  
}