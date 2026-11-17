export {};

// 1
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => {
  return 100 + a;
};

// 2
let anything: any = -20;
anything = 'Text';
anything = {};

// 3
let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// 5
let person: readonly [string, number] = ['Max', 21];

// 6
enum LoadingStatus {
  LOADING = 'LOADING',
  READY = 'READY',
}

let status: LoadingStatus = LoadingStatus.LOADING;

// 7
let value: string | number = 'text';
value = 42;

// 8
let mode: 'enable' | 'disable' = 'enable';
mode = 'disable';

// 9
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// 10
type PageStatus = 'open' | 'close';

interface PageDetails {
  createAt: Date;
  updateAt: Date;
}

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: PageStatus;
  details?: PageDetails; 
}

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};