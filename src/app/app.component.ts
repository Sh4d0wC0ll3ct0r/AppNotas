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
  note = {id:null, title:null, description:null};
  editing = false;
  show_form = false;
  viewNote(note){
    this.editing = true;
    this.note = note;
    this.show_form = true;
  }
  addNote(){
    this.show_form = true;
  }
  cancel(){
    this.show_form = false;
   // this.note = {id:null, title:null, description:null};
  }
  createNote(){
    if(this.editing){
      var me = this;
      this.my_notes.forEach(function(el, i){
          if(el.id === me.note.id){
            me.my_notes[i] = me.note;
          }
      });
      me.show_form = false;
    }
    else{
    this.note.id = Date.now();
    this.my_notes.push(this.note);
    this.show_form = false;
    this.note = {id:null, title:null, description:null};
    }

  }
  delete(){
    var me = this;
    this.my_notes.forEach(function(el, i){
      if(el == me.note){
        me.my_notes.splice(i, 1);
      }
    });
    this.show_form = false;
    this.note = {id:null, title:null, description:null};
  }
}