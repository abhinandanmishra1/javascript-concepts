### This small project is for understanding event delegation

- Event delegation is a concept of handling events in an efficient way.
- If there are multple events then creating an event listener for each event or giving onlick as
an attribute in html is not a good approach.

- For handling such situations `Event Delegation` is used.

- What event delegation does?
  - Irrespective of creating multiple event handlers it focuses on one handler to handle all the events by using `event.target` property.
  - `event.target` specifies which target is clicked and if the target has any associated handler for that event then it will be called.


**Conclusion**
- Event delegation makes it easy to handle events.
- `event.target` tells the event which is targeted.
- if the targeted event has any handler associated then it gets executed.
- Less code and easier debugging.
- Less event handler causes less memory used.

