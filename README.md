# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > `Main.js`. First a we use a `for` loop to set up an event listener on the `li` elements in the HTML. A callback function retrieves the data-type and data-wish attributes from the clicked element and checks if the data-type is "child" and if the data-wish attribute exists. If both evaluate to true then a `window.alert` is displayed with the child's name & wish.
   
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > If not invoked in the scope of the `for...of` loop the `findCelebrityMatch()` function would only find a match for the first `child`. This is because the value of `child` is directly attached to the index of the loop. Outside of it, the scope of the `child` variable is only the first `child`, and that value would be used for the entire array of celebrities. Effectively matching every celeb with the same child object.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   >The name of the sport that the celebrity plays is displayed in the window alert text by accessing the `data-sport` attribute of the celebrity's list item element and including its value in the alert message.

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The algorithm in the main module sets up the application's UI, generates the HTML for the kids and celebrities sections, and handles user interactions. It handles interactions by attaching `event listeners` to the `<li>` attributes that are dynamically rendered in the imported functions. These event handlers retrieve the `data-type` and `data-wish` or `data-sport` attributes from the clicked list item and display a `window.alert` with the corresponding information. 
