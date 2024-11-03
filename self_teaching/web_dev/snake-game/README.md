https://www.freecodecamp.org/news/build-a-snake-game-with-react-redux-and-redux-sagas/#final-game

Simple tutorial to learn about building webapp games in React, along with redux and redux saga.

Notes of important points that were harder for me to understand, coming into this with a simple vanilla JS/react background, but not having dealt with state management too heavily yet:

Honestly thought this was a terrible tutorial. 
No explanation of why or hows, just essentially a powerpoint flowchart of what the app does.
The order in which components are implemented being completely nonlinear, the brushing off of typescript, typos everywhere.
I ended up calling it off 1/4 of the way through and just exploring the source code. 

*STORE*
```
store/
├── actions
│   └── index.ts
├── reducers
│   └── index.ts
└── sagas
    └── index.ts
├── index.ts
```
- *Actions*
    - Constants that represents actions that our application can perform and dispatch to the Redux store. 
    - We will use the same action constant to create a function which will return an object with the following properties:
        - type: Action type, that is action constant
        - payload: additional data that acts as a payload.
    - These functions which return an object with the type property are called action creators. We use these functions to dispatch actions to our Redux store.
    ```
    //Without payload
    export const moveRight = () => ({
        type: MOVE_RIGHT
    });

    //With payload
    export const moveRight = (data: string) => ({
        type: MOVE_RIGHT,
        payload: data
    });
    ```

*REDUCERS*
- Reducers are functions that return a new global state every time an action is dispatched. They take in the current global state and return the new state based on the action that is dispatched/called.  This new state is calculated based on the previous state.
- We should be careful here that we do not perform any side-effects inside this function. We should not alter the global state – rather we should return the updated state as a new object itself. Therefore, the reducer function should be a pure function.

```
const GlobalState = {
    data: ""
};

const gameReducer = (state = GlobalState, action) => {
    switch (action.type) {
        case "MOVE_RIGHT":
            /**
             * Perform a certain set of operations
             */
            return {
                ...state, data: action.payload
            };

        default:
            return state;
    }
}
```


*CONTEXT*
> The context of a canvas element provides you with all the information you need related to the canvas element. It gives you the dimensions of the canvas and also helps you draw on the canvas. To get the context of our canvas element we need to call the getCanvas('2d') function which returns the 2d context of the canvas. The return type of this function is CanvasRenderingContext2D interface. To do this in pure JS we would do something like below:
```
const canvas = document.querySelector('canvas');
const canvasCtx = canvas.getContext('2d');
```

> But to do so in React we need to create a ref and pass it to the canvas element so that we can address it later in different hooks. To do so in our application, create one ref using the useRef hook:

```
const canvasRef = useRef<HTMLCanvasElement | null>(null);
```

> Pass the ref into our canvas element:

```
<canvas
  ref={canvasRef}
  style={{
    border: "3px solid black",
  }}
  height={height}
  width={width}
/>;
```

> Once the canvasRef is passed into the canvas element, we can use it inside a useEffect hook and store the context in a state variable.

```
export interface ICanvasBoard {
  height: number;
  width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
  const canvasRef = (useRef < HTMLCanvasElement) | (null > null);
  const [context, setContext] =
    (useState < CanvasRenderingContext2D) | (null > null);

  useEffect(() => {
    //Draw on canvas each time
    setContext(canvasRef.current && canvasRef.current.getContext("2d")); //store in state variable
  }, [context]);

  return (
    <canvas
      ref={canvasRef}	
      style={{
        border: "3px solid black",
      }}
      height={height}
      width={width}
    />
  );
};
```
> Storing canvas context in a state variable