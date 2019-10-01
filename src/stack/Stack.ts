import { Product } from "./Product";

class Stack {
  private top: Product | null = null;
  private size: number = 0;

  get getSize() {
    return this.size;
  }

  isEmpty(): boolean {
    return this.top == null;
  }

  push(data: string): void {
    this.top = new Product(data, this.top);
    this.size++;
  }

  pop(): string {
    let erasedData = this.top!.data;
    this.top = this.top!.bellow;
    this.size--;
    return erasedData;
  }

  print(): void {
    let current = this.top;
    let arrayOfItems: string[] = [];
    while (current != null) {
      arrayOfItems.push(current.data);
      current = current.bellow;
    }
    console.log(arrayOfItems);
  }
}

export { Stack };
