import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

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
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

