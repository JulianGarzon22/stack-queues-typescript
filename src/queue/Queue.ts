class Queue {
  private N: number;
  private front: number;
  private rear: number;
  private count: number;
  private qarray: string[];

  constructor(N: number) {
    this.N = N;
    this.front = this.rear = this.count = 0;
    this.qarray = [];
  }

  enqueue(data: string): void {
    if (this.isFull()) {
      console.log("La cola está llena");
    } else {
      this.qarray[this.rear] = data;
      this.rear = (this.rear + 1) % this.N;
      this.count++;
    }
  }

  dequeue(): string {
    let element: string;
    if (this.isEmpty()) {
      console.log("La cola está vacía");
      return "";
    } else {
      element = this.qarray[this.front];
      this.front = (this.front + 1) % this.N;
      this.count--;
    }
    return element;
  }

  isEmpty(): boolean {
    return this.count <= 0;
  }

  isFull(): boolean {
    return this.count >= this.N;
  }

  printQueue() {
    console.log(this.qarray);
  }
}

export { Queue };
