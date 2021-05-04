import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length;
  includeSymbol=false;
  includeNumbers=false;
  includeLetters=false;
  password=" ";
  onChangeLength(value:string){
    const parsedValue=parseInt(value);
    console.log(parsedValue);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }
  noLength(){
     if(isNaN(this.length)){
       return false;
     }
     else{
       return true;
     }
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNUmbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbol = !this.includeSymbol;
  }
  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='@#$%^&*!~';
    let validChars=''
    if(this.includeLetters){
          validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbol){
      validChars+=symbols;
    }
    let generatedPassword="";
    for(let i=0;i<this.length;i++){
      let index=Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;
  }

}
