class Product {
  public data: string;
  public bellow: Product | null;

  constructor(data: string, bellow: Product | null) {
    this.data = data;
    this.bellow = bellow;
  }
}

export { Product };
