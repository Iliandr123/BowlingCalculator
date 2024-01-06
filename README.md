# BowlingCalculator

Here implement the logic of bowling game score calculation and cover all needed cases by unit tests used TDD approach.

Game rules:

- game consists of 10 frames
- player's goal is to try to knock down 10 pins every frame
- player can throw 1 or 2 balls each game. 1 ball is thrown if player knocked down all 10 pins, otherwise player gets a second throw
- if player knocks down all 10 pins in one throw, it is a strike
- if player knocks down all 10 pins in two throws, it is a spare
- player gets 1 score for every pin
- every strike frame gets additional scores from 2 following throws
- every spare frame gets additional scores from 1 following throw
- if 10th frame was a strike, player gets bonus: to throw 2 more balls
- if 10th frame was a spare, player gets bonus: to throw 1 more ball