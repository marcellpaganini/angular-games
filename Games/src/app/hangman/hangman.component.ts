import { Component, OnInit } from '@angular/core';
import { words } from './words';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  words: string[] = words;
  randomWord: string = this.words[Math.floor(Math.random() * this.words.length)];
  constructor() { }

  ngOnInit(): void {
  }

}
