import React from 'react';
import Banner from '../../components/Banner';
import PhotoAlbum from '../../components/PhotoAlbum';
import SmallImage from '../../components/SmallImage';
import littleLife from './little-life.png';

const Page = () => (
  <div>
    <h1>Birth-Kindergarten</h1>

    <SmallImage src={littleLife} />

    <p>
      The goal of Lifestone’s LITTLE LIFE ministry is to teach kids truths of
      the Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by serving you and your kids.
      Lifestone is committed not only to cementing the fundamentals of faith
      into the hearts and minds of children, but also equipping parents and
      getting families talking about Jesus together throughout their week.
    </p>

    <Banner>
      <h2>What to Expect</h2>
    </Banner>

    <p>
      When you walk in the door you’ll see signage directing you to your child’s
      check in. At the check in area, you will be greeted by a volunteer who
      will help you sign in your child. Your child is sure to have a blast and
      learn a lot through their kid-sized Bible lesson!
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all submitted to extensive background checks and interviews.
    </p>

    <PhotoAlbum
      albumId="72157651701477048"
      coverImage="https://c1.staticflickr.com/5/4163/34566183695_c28f477ec8_z.jpg"
    />
  </div>
);

export default Page;
