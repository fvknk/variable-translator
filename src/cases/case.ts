export class Case {
  #inputText: string

  get inputText(): string { return this.#inputText }
  get naturalText(): string { return this.trimUnderscore(this.inputText) }

  constructor(text: string) {
    if (text.length === 0) throw new Error('文字列が指定されていません。')

    this.#inputText = text
  }

  static applyTo(_: string): boolean {
    return callUnableMethod()
  }

  private trimUnderscore(text: string): string {
    return Case.trimUnderscore(text)
  }

  static trimUnderscore(text: string): string {
    if (text[0] === '_') return Case.trimUnderscore(text.slice(1))
    if (text.slice(-1) === '_') return Case.trimUnderscore(text.slice(0, -1))
    return text
  }
}

function callUnableMethod(): any {
  throw new Error('許可されていない呼び出しです。')
}