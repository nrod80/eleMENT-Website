import React, { Component } from 'react';

export default class Home extends Component {

  drawn = [];


  // TODO fix thix, it's disgusting
  draw = (file, x, y) => {
    if (this.drawn.includes(file)) return;
    this.drawn.push(file);
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const imageObj = new Image();
    imageObj.src = `public/images/${file}`;

    // hacky workaround for need double click, which is caused by async src access
    window.setTimeout(() => context.drawImage(imageObj, x, y), 200);
  }

  render() {
    return (
      <div>
        <div id="title" className="slide header">
          <img
            src="public/images/final logo.png"
            id="logo"
            title="Click to view full description of badges"
            className="tooltip"
          />
          <p id="mission">
            Our Mission: The purpose of eleMENT is to nurture interest in energetic, enthusiastic students wishing to further their education in entrepreneurial concepts by engaging them in activities, discussions, interactions with professionals, and hands-on experience. We at eleMENT believe that in order to foster the entrepreneurial spirit, one must be taught by doing.
          </p>
        </div>

        <div id="slide1" className="slide">
          <div className="title">
            <table cellPadding="5">
              <tr>
                <col width="600" />
                <col width="375" />
                <td>
                  <h1>Overview</h1>
                  <p>
                    eleMENT is an entrepreneurial education program that gives students the foundation to take their ideas and build them into a reality. It combines Lean Startup theory, application through activity, and working with entrepreneurs who serve as mentors to give students an immersive experience. The program currently is aimed at IMSA students and operates on Wednesdays out of 1871 Chicago. This allows full access to an innovative environment full of mentors who help spark a passion for entrepreneurship.
                  </p>
                  <a href="eleMENT Curriculum Overview.pdf">
                    <p id="description">Click here to get an in-depth view.</p>
                  </a>
                </td>
                <td align="center">
                  <canvas id="myCanvas" width="350" height="350" />
                  <button onClick={() => this.draw('build.png', 158, 50)}>Step One</button>
                  <button onClick={() => this.draw('measure.png', 252, 230)}>Step Two</button>
                  <button onClick={() => this.draw('learn.png', 60, 230)}>Step Three</button>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div id="slide2" className="slide">
          <div className="title">
            <h1>Want to learn more?</h1>
            <p>Watch our short promo video on exactly what we teach!</p>
            <iframe
              width="80%"
              height="360"
              src="https://drive.google.com/file/d/0B5uDhssC_V9uT2ZvWDlManE3X2c/preview"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    );
  }
}
