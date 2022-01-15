import MeetupList from '../components/meetups/MeetupList';

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

const HomePage = () => {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;