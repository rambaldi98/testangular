import { Component, OnInit } from '@angular/core';
import { NewWord } from './newWord';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  status = false;
  
  arrWords : NewWord[] = [];
  


   worldClass : NewWord = {
    en : '',
     vn : '',
     memorized : false
   }


  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  addWord() {
   let world:NewWord  = this.worldClass;
    
    this.arrWords.unshift({
      en : world.en,
      vn : world.vn,
      memorized : world.memorized

    });
    this.status = false; 
    this.worldClass.en = '';
    this.worldClass.vn = '';
    console.log(this.arrWords);
  }

  

  deleteWord(id: NewWord)  {

     let index = this.arrWords.findIndex(e => e === id);
     this.arrWords.splice(index, 1);

  }


}
