import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ɵNgNoValidate } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewpostComponent } from '../viewpost/viewpost.component';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})

export class CreatepostComponent implements OnInit {
   @ViewChild(ViewpostComponent,{ static: false }) viewaddpost: ViewpostComponent;
  shoppingForm;
  @Input() items;
  totalitems:[]=[];
  @Output() iscrete:EventEmitter<any> = new EventEmitter();
  @Output() additems:EventEmitter<any> = new EventEmitter();
  constructor(private route: Router) {

  }

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      name: new FormControl('',Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
    this.totalitems=this.items;
  }
  
  onSubmit() {
    console.log('addednote', this.shoppingForm.value,this.items.length, this.totalitems.length);
    if (this.shoppingForm.valid) {
      const additem ={
        id:(this.items.length+1).toString(),
        name:this.shoppingForm.value.name,
        description:this.shoppingForm.value.description,
        price:this.shoppingForm.value.price,
      };
     // this.items = [...this.items,additem]
      
    console.log("newpostdata", additem);
    this.additems.emit(additem);
    this.backtoView();
    }
 
  }
  backtoView(){
    const iscreate=false;
    this.iscrete.emit(iscreate);
  }

}
