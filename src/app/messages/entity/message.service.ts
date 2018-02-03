import {Injectable} from '@angular/core';

export class Message {

  constructor(private _text: string,
              private _error: boolean = false) {
  }


  get text(): string {
    return this._text;
  }

  get error(): boolean {
    return this._error;
  }
}
