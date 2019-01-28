import React from 'react';
import styled from 'react-emotion';

import LifeGroupLeaderLayout from './LifeGroupLeaderLayout';
import HoverCard from '../../components/HoverCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;

  & a,
  & a:hover {
    text-decoration: none;
  }
`;

const TextArea = styled.div`
  padding: 20px;
  color: rgba(0, 0, 0, 0.7);
`;

const links = [
  {
    name: 'Example LifeGroup Schedule',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/Example+LifeGroup+Schedule+10.24.18.pdf',
  },
  {
    name: 'Leader Expectations',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup.Leader.Expectations.pdf',
  },
  {
    name: 'Host Expectations',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup.Host.Expectations.pdf',
  },
  {
    name: 'LifeGroup Covenant',
    link:
      'https://s3-us-west-2.amazonaws.com/lifestonechurch.net/pdfs/LifeGroup_Group_Covenant.pdf',
  },
];

const Page = () => (
  <LifeGroupLeaderLayout>
    <div>
      <h2>Resources</h2>
      <h3>PDFs</h3>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <h3>Training Videos</h3>
      <h4>Constant Talkers</h4>
      <Container>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/9755"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Tips for Dealing with Constant Talkers"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98723.jpeg"
            />
            <TextArea>
              <p>
                Is there someone in your group who is unaware of how little they
                allow others to speak? Listen to Larry Osborne, Pastor at North
                Coast Church in San Diego, CA, as he gives us practical tips to
                dealing with a constant talker.
              </p>
            </TextArea>
          </a>
        </HoverCard>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/9035"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Rein in the Chatterbox"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98532.jpeg"
            />
            <TextArea>
              <p>
                One persistent talker can disrupt your whole group. In this
                two-and-a-half minute video, Heather Zempel, Pastor of
                Discipleship at National Community Church in Washington, D.C.,
                shares some practical and loving ways to keep your small group
                discussions on track.
              </p>
            </TextArea>
          </a>
        </HoverCard>
      </Container>
      <h4>General Help</h4>
      <Container>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/202578"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Biblical Shepherding"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/123075.jpeg"
            />
            <TextArea>
              <p>
                Shepherding may be a foreign concept to many of us who grew in
                American cities or suburbs, but it was very familiar to people
                who lived in the biblical eras. What do shepherds actually do?
                How could it help us today as we lead and disciple others in
                Christ? In three videos, Mike Dsane, Matt Younger, and Beth
                Broom talk about what it means to spiritually shepherd small
                group members and what it looks like in both men’s and women’s
                groups. Mike Dsane, Matt Younger, and Beth Broom are Groups
                Pastors at The Village Church in the Dallas-Fort Worth area.
              </p>
            </TextArea>
          </a>
        </HoverCard>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/9099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Two Keys to Successful Leadership"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98540.jpeg"
            />
            <TextArea>
              <p>
                If you want to successfully lead, you have to be willing to
                serve like Jesus. Listen to Jenny Boyett, Director of
                Assimilation for Small Groups at North Point Community Church in
                Alpharetta, GA, as she challenges us to focus on what really
                matters.
              </p>
            </TextArea>
          </a>
        </HoverCard>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/8957"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Leaders Should Take the Time to Build Relationships"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/97894.jpeg"
            />
            <TextArea>
              <p>
                Darrin Patrick serves as Lead Pastor of The Journey Church in St
                Louis, which he founded in 2002. Darrin also serves on the board
                of directors of the Acts 29 Church Planting Network. In this
                session, he talks about the importance of the leader taking the
                time to build relationships with their group members outside of
                group time.
              </p>
            </TextArea>
          </a>
        </HoverCard>
      </Container>
      <h4>Going Deeper</h4>
      <Container>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/9002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Deeper Teaching vs. Deeper Application"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98521.jpeg"
            />
            <TextArea>
              <p>
                Eric Metcalf is the Adult Ministries Champion for Community
                Christian Church in Chicago and for NewThing, a church-planting
                network. In this 3-minute clip, Eric challenges the notion that
                what small groups need is "deeper teaching."
              </p>
            </TextArea>
          </a>
        </HoverCard>
      </Container>
      <h4>Asking Good Questions</h4>
      <Container>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/20658"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="The Art of Asking Good Questions"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/98852.jpeg"
            />
            <TextArea>
              <p>2nd video</p>
              <p>
                Leading a small group can be intimidating, especially if you
                feel like you don’t know how to encourage meaningful
                discussions. In this session, Kevin Baker, Small Groups Pastor
                at Ada Bible Church near Grand Rapids, MI, takes us through a
                step-by-step process to asking great questions that will get
                your group talking on a deeper level.
              </p>
            </TextArea>
          </a>
        </HoverCard>
        <HoverCard>
          <a
            href="https://www.rightnowmedia.org/Training/Post/View/69326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Good Questions for Small Groups"
              src="https://d2y24eux71xwor.cloudfront.net/Images/Production/Content/Element/105928.jpeg"
            />
            <TextArea>
              <p>
                Hayley Miller, from Word of Life Fellowship, has several great
                ideas for asking good questions. We often ask questions that
                only return "churchy" answers, or we offer solutions to an
                answer so quickly that we fail to understand the real underlying
                problem. Listening well and asking probing questions will help
                us avoid both of these pitfalls.
              </p>
            </TextArea>
          </a>
        </HoverCard>
      </Container>
    </div>
  </LifeGroupLeaderLayout>
);

export default Page;
