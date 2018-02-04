
export class Message {

  constructor(private _text: string,
              private _error: boolean = false,
              private _responses? :[[string, (string:any)=> void]]) {
  }


  get text(): string {
    return this._text;
  }

  get error(): boolean {
    return this._error;
  }


  get responses(): [[string, ((string:any) => void)]] {
    return this._responses;
  }
}
