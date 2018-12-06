export class Book {
  constructor(
    public id: number,
    public isbn: String,
    public title: String,
    public summary: String,
    public price: number,
    public taxIncluded: boolean,
    public stock: number
  ) {}
}
