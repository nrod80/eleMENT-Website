import React from 'react';

export default class Kanban extends React.PureComponent {
  render() {
    return (
      <div id="title" className="custom">
        <h1>The Kanban Challenge</h1>
        <p>
          What is Kanban?
          &nbsp;
          <span id="description">
            A method of productivity inspired by the Toyota Production System and Lean manufacturing that helps people to manage work done in teams. Teams use Kanban boards as a visual to see what work has to be done, what is currently being worked on, and what is done. The basic board is pictured below:
            &nbsp;
          </span>
        </p>
        <table border="1px" cellPadding="5px">
          <tr>
            <td><h6>To Do</h6></td>
            <td><h6>Doing</h6></td>
            <td><h6>Done</h6></td>
          </tr>
          <tr>
            <td><p>Tasks needing completion go in this column.</p></td>
            <td>
              <p>
                Tasks that are currently being done are in this column; there is  a Maximum for this column.
              </p>
            </td>
            <td>
              <p>All tasks, once completed, get moved into this column.</p>
            </td>
          </tr>
        </table>
        <p>
          What did eleMENT do?
          &nbsp;
          <span id="description">
            We took this concept and made it into a competitive team challenge called the Kanban Challenge. Groups of four would compete to complete 21 tasks in 45 minutes, only being able to work on 3 at a time per Kanban, and reign champion. The tasks ranged from silly to serious, for example:
            &nbsp;
          </span>
        </p>
        <table cellPadding="5px">
          <tr>
            <td>
              <ul id="list">
                <li>
                  Post the eleMENT Facebook Page link on two sophomore’s walls who would be interested in the program
                </li>
                <li>Solve a complicated math equation</li>
                <li>Mummify a member in toilet paper</li>
                <li>Figure out what eleMENT stands for</li>
                <li>Build the eleMENT logo out of craft supplies</li>
                <li>Blow up 20 balloons then pop them</li>
                <li>
                  Periodic Poem (Make a poem incorporating 13 elements from the periodic table)
                </li>
                <li>Make a chemical model with marshmallows and toothpicks</li>
                <li>Record a 1 minute rap</li>
                <li>Solve a 100-piece jigsaw puzzle</li>
              </ul>
            </td>
            <td>
              <img src="public/images/gloria.jpg" />
            </td>
          </tr>
        </table>
        <table cellPadding="5px">
          <tr>
            <td>
              <img src="public/images/winners.png" />
            </td>
            <td>
              <p>Reactions?</p>
              <p id="description">
                “We liked that this event required us to utilize teamwork and communication in a pressured situation, while keeping an overall fun environment.”
              </p>
              <p id="description">
                “This was a perfect play on the competitive spirit of IMSA students and I foresee this inspiring more competition-based events as engaging as this one.”
              </p>
            </td>
          </tr>
        </table>
        <center><img src="public/images/logo.jpg" h /></center>
      </div>
    );
  }
}
