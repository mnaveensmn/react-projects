import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();
    const newsId = router.query.newsId;
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

