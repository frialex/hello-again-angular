import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  listOfStuff = [{href: "https://angular.io/tutorial", text: "Tour of Heroes"},
                 {href: "https://github.com/angular/angular-cli/wiki", text: "CLI Documentation"},
                 {href: "https://angular.io/guide/displaying-data", text: "Displaying Data"}]

  constructor() { 
    var self=this
    
    setTimeout(function() {
     self.listOfStuff.push({href: "https://angular.io/guide/template-syntax", text: "Template syntax"})
    }, 4000);
  }

  ngOnInit() {
  }

}
