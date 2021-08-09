import { Component, OnInit } from '@angular/core';
import { toUnicode } from 'punycode';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  itemsJson;
  items = [];//holds the items
  isCerate: boolean = false;//flag for create item
  isedit: boolean = false;//flag for update 
  selectedItem;//it holds edit data 
  isView = true;//flag for viewpage
  errorMsg;//it holds error massage comming form backend

  constructor(public commonservice: CommonService) { }

  ngOnInit(): void {
    this.commonservice.getdata().subscribe(data => {
      this.itemsJson = data;
      this.items = this.itemsJson.items;
    },
      error => { console.log(error.error.error.message); this.errorMsg = error.error.error.message }

    )
  }

  createpost() {
    this.isView = false;
    this.isCerate = true;
  }
  iscrete(event) {
    this.isCerate = event;
    this.isView = true;
  }
  additema(event) {
    this.items = [...this.items, event];
//below code for when connect backend

    // this.commonservice.postdata(event).subscribe(
    //   data => {
    //     this.itemsJson = data;
    //     this.items = this.itemsJson.items;
    //   },
    //   error => { console.log(error.error.error.message); this.errorMsg = error.error.error.message }
    // )
  }

  editpost(item) {
    this.isedit = true;
    this.isView = false;
    this.selectedItem = item;
  }
  onedit(event) {
    this.isView = true;
    this.isedit = false;
    const index = this.items.findIndex(data => data.id === event.id);
    this.items.splice(index, 1, event);

    //below code for when connect backend

    // this.commonservice.putdata(event).subscribe(
    //   data => {
    //     this.itemsJson = data;
    //     this.items = this.itemsJson.items;
    //   },
    //   error => { console.log(error.error.error.message); this.errorMsg = error.error.error.message }
    // )
  }
  deletepost(item) {
    const index = this.items.findIndex(data => data.id === item.id);
    this.items.splice(index, 1);
  }
}
