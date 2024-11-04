export class Validator {
  #inputText: string

  private set inputText(text: string) { this.#inputText = text }

  get inputText() { return this.#inputText }

  constructor(text: string) {
    if (text.length === 0) throw new Error('文字列が指定されていません。')

    this.#inputText = text
  }

  exec() {
    if (this.inputText.length === 0) throw new Error('文字列が指定されていません。')
    if (/(^[^a-zA-Z]+$|[^a-zA-Z0-9!?_-])/.test(this.inputText)) throw new Error('不正な文字列です。')

    return true
  }
}
