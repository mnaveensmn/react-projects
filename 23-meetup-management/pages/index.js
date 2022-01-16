import { Fragment, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://officesnapshots.com/wp-content/uploads/2011/09/t3-700x377.jpg",
    address: "Chennai",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://officesnapshots.com/wp-content/uploads/2011/09/t3-700x377.jpg",
    address: "Chennai",
    description: "This is a second meetup",
  },
];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export default HomePage;

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API
  
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// };

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://mnaveensmn:YO5X9Mfva6hiZ0FV@cluster0.q9ej8.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();
  client.close();
  
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })),
    },
    revalidate: 10,
  };
};

