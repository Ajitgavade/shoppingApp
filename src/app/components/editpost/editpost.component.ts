import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  @Input() selectedItem;
  @Output() edited: EventEmitter<any>;

  shoppingForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });
  constructor() {
    this.edited=new EventEmitter<any>();
   }

  ngOnInit(): void {
  //   this.profileForm.controls['title'].setValue(this.selectedNote.title);
  //   this.profileForm.controls['body'].setValue(this.selectedNote.body);
    // this.title = this.selectedNote.title;
    // this.body = this.selectedNote.body;
    console.log(this.selectedItem)
    this.shoppingForm.setValue({
      name: this.selectedItem.name,
      description: this.selectedItem.description,
      price: this.selectedItem.price,
   })
  }
 

  onEdited() {
   // console.log("onEdited", this.shoppingForm.value);
  this.selectedItem.name=this.shoppingForm.value.name;
  this.selectedItem.description=this.shoppingForm.value.description;
  this.selectedItem.price=this.shoppingForm.value.price;      
     // console.log("Edit successfully....",  this.selectedItem);

    this.edited.emit( this.selectedItem);
  }
}

