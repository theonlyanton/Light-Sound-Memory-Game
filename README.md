# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **ANTON KROTENOK**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/funny-deeply-lupin
Live site: https://funny-deeply-lupin.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [N/A] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

**The reset button changes the high score to 0.**

![Resetting the high score](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/resetHighScore.gif)
<br/>
<br/>
**An error is displayed when the timer runs out.**

![Running out of time](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/noMoreTime.gif)
<br/>
<br/>
**Clicking and holding onto a button "highlights" an image.**

![Highlighting buttons](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/highlightingButtons.gif)
<br/>
<br/>
**The game starts and ends with all the appropriate changes.**

![Starting and ending the game](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/startGameEndGame.gif)
<br/>
<br/>
**Entering the wrong sequence means that you lose the game.**

![Losing the game](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/loseGame.gif)
<br/>
<br/>
**Entering the right sequence means that you win the game.**

![Winning the game](https://github.com/theonlyanton/Light-Sound-Memory-Game/blob/main/.gif-assets/winGame.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

     [Google, StackOverflow, Gscode.in, 1stwebdesigner.com, blog.avada.io, computerhope.com]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

     [One of the largest challenges that I encountered while creating this submission was creating a countdown timer that, starting from a value of 20, would give the player a decreasing amount of time (seconds) to repeat back the computer-generated pattern. More specifically, it was difficult trying to have the associated HTML element update itself on each new turn. Within my "countDown()" function I had to make sure I implemented the correct "if" statement to check whether or not the game ended. This was dependent on the actual "count" value and "reset", a variable representing whether or not the game would return back to its initial state (not including the high score). To overcome any difficulties in writing my own functions, I read about the pre-built "setInterval()" method used to set a delay for functions that are executed over and over again. I created the "resetTimer()" method to bring the time back (visually) to 20s after each new turn. Together, the "playClueSequence()" would start a turn by providing a computer-generated pattern of clicks while the line "timer = setInterval(countDown, 1000);" called "countDown()" which in turn called "resetTimer()" and checked if 20 seconds passed or the wrong pattern was entered. Keeping track of the count value took more time than I had expected as I had to make sure that "reset" boolean was correctly tied to the "stopGame()" and "resetTimer()" function. StackOverflow gave advice about how to dynamically change the content on the screen in addition to helping me understand the CSS Box Model. Most of the bug fixes were resolved via careful thinking and testing.]

3. What questions about web development do you have after completing your submission? 
   (recommended 100 - 300 words) 

     [After completing my submission, I have questions about how to more efficiently generate CSS files in which sizing (of all elements) is functional yet also consistent. For example, it is possible to set the height and length of a "div" container element based on units of EM, PX, PT, CM,  or IN. I want to understand the specific circumstances in which certain units are preferred over others. Furthermore, I would to learn how knowledge of common data structures, such as a linked list or graph, can be integrated with the backend portion of a project. Where is the data stored? How is it manipulated? This is an important part of full-stack development as there are numerous technologies that a programmer could use to generate the same digital product. Finally, I would also like to visualize the way in which the JavaScript language implements object-oriented programming (OOP). JavaScript is not a class-based language so it is interesting to understand how its version of OOP is directly connected to HTML and CSS files.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

     [If I had a few more hours to work on this project, I would first implement the rest of the "additional" features, this including having the playback speed increase after each turn, offering three mistakes per play, and creating a game button sound that is more complex than a single tone. My next step would be to edit my current "counter" so that the player receives an extra five seconds of time after each turn. This would make the game more balanced as it would not be fair to give the same time to click on one button and eight buttons. Visually speaking, I would have liked to combine the four buttons into a circular wheel that is divided equally into pieces of six. I could then edit the start/stop button to be an inner part of that circle. When a player enters the wrong sequence the background would briefly flash red, indicating that he/she must start again. Likewise, I would like to clean up the CSS file by combining elements that share and point their characteristics towards the same HTML container elements (ex. #clock & .blurred-box). This makes the project easier to debug. Other potential changes include adding a high score leaderboard (where players must first enter their name to start) and creating a "battle" mode in which two players can compete with each other by generating a pattern for the other.]

 

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [ANTON KROTENOK]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
