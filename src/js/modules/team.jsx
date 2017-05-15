import React from 'react';

export default class Team extends React.PureComponent {

  // TODO create team member config list, map to DRY out code
  render() {
    return (
      <div id="title" className="slide header">
        <table cellPadding="20">
          <tr><h1 id="titleHeader">Current Members</h1> </tr>
          <tr>
            <td><img src="/resources/WetFloor.png" className="grow" /></td>
            <td>
              <h4>Ashritha Karuturi</h4>
              <p id="team">
                IMSA Class of 2018; Hello, I'm Ashritha! I'm an eleMENT facilitator and fell in love with entrepreneurship my sophomore year through joining eleMENT.  I'm also a Leadership Education and Development (LEAD) facilitator and an intern at shift.solutions. Some of my other passions include bharatanatyam, TaeKwonDo, and sleeping!
              </p>
              <p id="team">Email: akaruturi@imsa.edu</p>
            </td>
          </tr>
          <tr>
            <td><img src="/resources/Charleston.png" className="grow" /></td>
            <td>
              <h4>Charlie Hultquist</h4>
              <p id="team">
                IMSA Class of 2018; Charlie works as a facilitator with eleMENT, developing and teaching curriculum. He wants to go into education, but currently he is interested in art, swimming, and, of course, entrepreneurship.
              </p>
              <p id="team">Email: chultquist@imsa.edu</p>
            </td>
          </tr>
        </table>

        <table cellPadding="20">
          <tr><h1 id="titleHeader">Alumni Members</h1> </tr>
          <tr>
            <td><img src="public/images/puja.png" className="grow" /></td>
            <td>
              <h4>Puja Mittal, Co-Founder and Head eleMENTor</h4>
              <p id="team">
                IMSA Class of 2015; Since co-founding the program in 2013, Puja has taken the program to new heights with entirely redeveloped curriculum and a board made up of former eleMENT students.
              </p>
              <p id="team">Email: puja.element@gmail.com</p>
            </td>
          </tr>
          <tr>
            <td><img src="public/images/nick.png" className="grow" /></td>
            <td>
              <h4>Nick Rodriguez, Former Student and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2016; After an inspirational week in Silicon Valley, Nick joined eleMENT and is taking the initiative to plan for the future of the program.
              </p>
              <p id="team">Email: nrodriguez@imsa.edu</p>
            </td>
          </tr>
          <tr>
            <td><img src="public/images/ben.png" className="grow" /></td>
            <td>
              <h4>Ben Cooper, Former Student and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2016; Having been one of the first interested students, Ben has become an excellent facilitator in turn and is developing curriculum for external programs.
              </p>
              <p id="team">Email: bcooper@imsa.edu</p>
            </td>
          </tr>
          <tr>
            <td><img src="public/images/david.png" className="grow" /></td>
            <td>
              <h4>David Xu, Former Student and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2016; Also one of the first to show interest, David applied his learnings in TALENT's Power Pitch, placing in the final round with a 3D printed cell-phone case.
              </p>
              <p id="team">Email: davidxu271@gmail.com</p>
            </td>
          </tr>
          <tr>
            <td><img src="/resources/Vainius.png" className="grow" /></td>
            <td>
              <h4>Vainius Normantas, Former Studnet and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2017; Hi there! My name is pronounced vein-knee-is, I'm the head eleMENTor this year, and I absolutely love teaching entrepreneurship. I strive for constant improvement in our program so that the eleMENT team can deliver the most valuable education. I'm also a big fan of white chocolate macadamia nut cookies and mangosteen. Got questions? Feel free to email me!
              </p>
              <p id="team">Email: vnormantas@imsa.edu</p>
            </td>
          </tr>
          <tr>
            <td><img src="/resources/Evan.png" className="grow" /></td>
            <td>
              <h4>Evan Sun, Former Studnet and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2017; Hello! Unlike Vainius, my name isn't that hard to pronounce. Coming into IMSA, I had no idea what I planned to do in life. I decided to join eleMENT on a whim, and that was when I got introduced to entrepreneurship. Right now, I aspire to pursue biomedical entrepreneurship, taking scientific innovations in academia and spinning them off into companies that can improve the lives of others. While not writing curriculum for eleMENT or maintaining the website, you can find me working on my 3D printer, playing competitive pokemon, or cooking new dishes. Hit me up if you want to talk more!
              </p>
              <p id="team">Email: esun@imsa.edu</p>
            </td>
          </tr>
          <tr>
            <td><img src="/resources/The Real Becca.png" className="grow" /></td>
            <td>
              <h4>Becca Lisk, Former Studnet and eleMENT Board</h4>
              <p id="team">
                IMSA Class of 2017; Hi, I'm Rebecca. Outside of eleMENT, I'm a Leadership Education and Development (LEAD) facilitator, Exodus tutor, and crossword puzzle enthusiast. I'm planning on studying computer science or statistics with a focus on computational biology, but I'm also strongly considering Russian and linguistics (and will probably change my major a few times before I settle on one!). I'm also into learning about entrepreneurship and electrochemistry, eating Thai food, and biking (though usually not at the same time). Shoot me an email!
              </p>
              <p id="team">Email: rlisk@imsa.edu</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
