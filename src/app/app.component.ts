import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  my_notes = [
    {id:1, title: 'Note 1', description: 'Description for note 1'},
    {id:2, title: 'Note 2', description: 'Description for note 2'},
    {id:3, title: 'Note 3', description: 'Description for note 3'},
    {id:4, title: 'Note 4', description: 'Description for note 4'},
  ];
  note = {title:null, body:null};
  show_form = false;
  addNote(){
    this.show_form = true;
  }
  cancel(){
    this.show_form = false;
  }
}