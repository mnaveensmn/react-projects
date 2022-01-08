import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author:'Max', text:'Learning React is fun!'},
    {id: 'q2', author:'Naveen', text:'Express your learning through blog'},
    {id: 'q3', author:'Naveen', text:'Contribute to community'},
    {id: 'q4', author:'Naveen', text:'Learn every single day !'},
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
}
export default AllQuotes;