const items: string[] = ["apple", "banana", "cherry", "date", "elderberry"];

function getRandomIndex(arr: any[]): number {
  return Math.floor(Math.random() * arr.length);
}

function getRandomItem<T>(arr: T[]): T {
  return arr[getRandomIndex(arr)];
}

const randomItem = getRandomItem(items);
console.log(`Random item: ${randomItem}`);
