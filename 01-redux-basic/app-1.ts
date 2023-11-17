// Actions
interface Action {
  type: string;
  payload?: any;
}

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);

    case "DECREMENT":
      return (state -= 1);

    case "MULTIPLY":
      return state * action.payload;

    case "DIVIDE":
      return state / action.payload;

    default:
      return state;
  }
}

//Use reducer function
const incrementationAction: Action = {
  type: "INCREMENT",
};

console.log(reducer(10, incrementationAction)); // result = 11

const decrementationAction: Action = {
  type: "DECREMENT",
};

console.log(reducer(10, decrementationAction)); // result = 9

const multiplyAction: Action = {
  type: "MULTIPLY",
  payload: 2,
};

console.log(reducer(10, multiplyAction)); // result = 20

const divideAction: Action = {
  type: "DIVIDE",
  payload: 2,
};

console.log(reducer(10, divideAction)); // result = 5
