import React from 'react';

export default class Resources extends React.PureComponent {
  // TODO map and DRY
  render() {
    return (
      <div id="title" className="custom">
        <table cellPadding="10">
          <tr>
            <td>
              <a href="https://drive.google.com/open?id=1ki_2WW92C2c6nUM96WDjoR9p2-i7iKUKalt5fW8xuT0">
                <img src="public/images/docs.png" height="300" />
              </a>
            </td>
            <td>
              <a href="https://docs.google.com/document/d/1pKxx3az_dsrynQv2f7HUHU9uYbdZaY_6MyHMGwvIyyY/edit?usp=sharing">
                <img src="public/images/docs.png" height="300" />
              </a>
            </td>
            <td>
              <a href="https://drive.google.com/open?id=1yTms5lL7QAaCDfKCj41Tx8RyosBlGzcCtCXNPtjBvsw">
                <img src="public/images/docs.png" height="300" />
              </a>
            </td>
          </tr>
          <tr>
            <td><p>Mod 1 Lesson Plan</p></td>
            <td><p>Mod 2 Lesson Plan</p></td>
            <td><p>Mod 3 Lesson Plan</p></td>
          </tr>
        </table>
      </div>
    );
  }
}
