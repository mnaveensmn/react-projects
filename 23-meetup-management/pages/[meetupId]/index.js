import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image= {props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      // {
      //   params: {
      //     meetupId: "m1",
      //   },
      // },
      // {
      //   params: {
      //     meetupId: "m2",
      //   },
      // },
    ],
  };
};

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://officesnapshots.com/wp-content/uploads/2011/09/t3-700x377.jpg",
        id: "m1",
        title: "Fresh Meetup",
        address: "Chennai",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupDetailPage;
