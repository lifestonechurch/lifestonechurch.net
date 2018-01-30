import React from 'react';
import BibleQuote from '../../components/BibleQuote';
import worship from './worship.jpg';

const AboutUs = () => (
  <div>
    <h1>About Us</h1>

    <p>
      A church in Riverton Utah excited about bringing the amazing message of
      God’s grace to our community. We are a Bible based church dedicated to
      doing whatever it takes to share the good news that has radically changed
      our lives to everyone possible.
    </p>

    <p>
      <img src={worship} />
    </p>

    <h2>Life discovered. Life shared.</h2>

    <BibleQuote reference="1 John 5:12 NLT">
      “Whoever has the Son has life; whoever does not have God’s Son does not
      have life.”
    </BibleQuote>

    <p>
      <b>Mission</b>: “Jesus came and told his disciples, “I have been given all
      authority in heaven and on earth. Therefore, go and make disciples of all
      the nations, baptizing them in the name of the Father and the Son and the
      Holy Spirit. Teach these new disciples to obey all the commands I have
      given you. And be sure of this: I am with you always, even to the end of
      the age.” Matthew 28:18-20 NLT
    </p>

    <p>
      <b>Mission Motto</b>: Life discovered. Life Shared.
    </p>

    <p>
      <b>Vision</b>: To establish a local church family committed to loving God,
      loving people, and sharing with everyone in our community and beyond, real
      life in Christ.
    </p>

    <p>
      <b>Strategy</b>:
    </p>
    <ul>
      <li>GET CONNECTED on Sundays at 9:00am or 10:30am.</li>
      <li>GET HEALTHY by committing to a LifeGroup.</li>
      <li>GET GOING! Serve, support, meet needs & share Jesus.</li>
    </ul>

    <p>
      <b>Values</b>:
    </p>

    <ul>
      <li>
        <b>Focus</b> – We will be guided by focusing on the mission Jesus gave
        His followers and the callings of the church to Evangelism, Ministry,
        Worship, Discipleship, and Fellowship, aware of our natural tendency to
        focus on self, those reached, and to slip in to maintenance mode, or
        busy church programming.
      </li>
      <li>
        <b>Grace</b> – We will humbly serve and love one another and both the
        easy to love and difficult outside our church family. We will humbly
        submit and support the imperfect leadership of the church and put others
        first.
      </li>
      <li>
        <b>Joy</b> – As we celebrate Jesus and live a life in God’s family our
        lives should be full of authentic joy than is attractive to those
        without God’s peace and forgiveness. We will have fun as a church
        family.
      </li>
    </ul>
  </div>
);

export default AboutUs;
