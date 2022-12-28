import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  gameState: string[] = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

  xTurn: boolean = true;
  gameOver: boolean = false;

  combinations: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onInput(index: number) {
    this.gameState[index] = this.xTurn ? 'x' : 'o';
    this.winCheck();
    this.xTurn = !this.xTurn;
  }

  winCheck() {
    for (let combination of this.combinations) {
      let a = combination[0];
      let b = combination[1];
      let c = combination[2];

      if (this.gameState[a] &&
          this.gameState[a] === this.gameState[b] &&
          this.gameState[b] === this.gameState[c]) {
            this.gameOver = true;
      }
    }
  }
}
