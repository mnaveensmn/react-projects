import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

const NewMeetupPage =  () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add your own meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking oppurtunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
  
}

export default NewMeetupPage;

