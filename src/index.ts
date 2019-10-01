import { Stack } from "./stack/Stack";
import { Queue } from "./queue/Queue";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n: number;
let products: string[];
let m: number;
let itemsPerStore: string[];

rl.question("", (_n: number) => {
  n = _n;
  let productQueue = new Queue(n);
  rl.question("", (_products: string) => {
    products = _products.split(" ", n);
    for (let item of products) {
      productQueue.enqueue(item);
    }
    rl.question("", (_m: number) => {
      m = _m;
      rl.question("", (_itemsPerStore: string) => {
        itemsPerStore = _itemsPerStore.split(" ", m);

        for (let numberOfItems of itemsPerStore) {
          let stack = new Stack();
          for (let i = 0; i < Number(numberOfItems); i++) {
            stack.push(productQueue.dequeue());
          }
          stack.print();
        }
        rl.close();
      });
    });
  });
});
