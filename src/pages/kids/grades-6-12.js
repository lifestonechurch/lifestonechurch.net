import React from 'react';
import Banner from '../../components/Banner';
import PhotoAlbum from '../../components/PhotoAlbum';
import youthImage from './youth.jpg';

const Page = () => (
  <div>
    <h1>Grade 6-12</h1>

    <img src="/assets/uploads/pages/youth.jpg" />

    <p>
      We exist to encourage and partner with the parents of Jr./Sr. High
      students to help guide kids through their spiritual journey.  Our desire
      is to see students empowered with the message of the gospel so that they
      find their identity and security in Christ alone.  We meet every Wednesday
      night to build up and encourage one another with a biblical message so our
      students can stand firm in their faith and be leaders on our campuses and
      in our neighborhoods and…. just because its fun!!!  On Sunday mornings the
      Jr. High &amp; Sr. High students attend church with their parents.
    </p>

    <Banner>
      <h2>We meet every Wednesday!</h2>
    </Banner>

    <p>Wednesdays, 6:30-8pm- Grades 6th-12th- Lifestone Church building</p>

    <p>
      Grab your friends and meet us next Wednesday as we continue learning who
      Jesus really was and is-and how this changes everything. Join in with
      students your age for crazy games and encouraging Bible study!
    </p>

    <Banner>
      <h2>Events</h2>
    </Banner>

    <Banner>
      <h2>Photos</h2>
    </Banner>

    <PhotoAlbum
      albumId="72157652789307104"
      coverImage="https://c1.staticflickr.com/5/4185/34566550455_64630617dc_z.jpg"
    />
  </div>
);

export default Page;
