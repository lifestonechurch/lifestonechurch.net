import React from 'react';
import Banner from '../../components/Banner';
import PhotoAlbum from '../../components/PhotoAlbum';
import SmallImage from '../../components/SmallImage';
import kidsLife from './kids-life.png';

const Page = () => (
  <div>
    <h1>Grades 1-5</h1>
    <SmallImage src={kidsLife} />

    <p>
      The goal of Lifestone’s KID’S LIFE ministry is to teach kids truths of the
      Bible with age-appropriate, fun, interactive experiences taught by
      committed volunteers who serve Jesus by  serving you and your kids.
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
      will help you sign in your child. Our desire is for families to worship
      together, so when the worship music begins, your child’s teacher will
      bring children grades K-5 in to worship along side the adults before
      returning to the kids area for their kid-sized Bible lesson.
    </p>

    <p>
      *** Our secure environments are staffed with loving volunteers who have
      all submitted to extensive background checks and interviews.
    </p>

    <PhotoAlbum
      albumId="72157651701812368"
      coverImage="https://c1.staticflickr.com/5/4219/34951080492_92f543647f_b.jpg"
    />
  </div>
);

export default Page;
