# Buzzle (Buzzvil + Wordle)

This is a very basic Wordle clone written in JS and React, using Vite as a starter.

## Getting Started

- Run the command below and the app will load in `localhost:5173`.

```
npm run dev
```

## Additional Libraries Used:

- React Router - for routing to URL (not implemented)

## Constraints:

- Create a Wordle app

  - Default answer is 'world'
  - Custom answers can be input by passing it in the input modal at the beginning of the game and pressing 'new answer'

- All attempts must check with the dictionary API

  - If the response is successful, I checked the type of the response to determine whether it was a word in the dictionary or not.
    - Arrays were in the dictionary, objects were not.

- Results window displays data from all prior games.
  - Time taken to complete this game
  - Number of puzzles won so far
  - Wordle win rate
  - Statistics on the attempts

## Issues

- Routing currently not implemented
  - Since the answer must be hashed in the URL, I plan on using `btoa` and `atob` to encode the game state to a URL-safe base-64 string and back.
- Physically pressing the buttons on the keyboard doesn't actually input the letters.
