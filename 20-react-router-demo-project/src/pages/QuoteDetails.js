import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author:'Max', text:'Learning React is fun!'},
    {id: 'q2', author:'Naveen', text:'Express your learning through blog'},
    {id: 'q3', author:'Naveen', text:'Contribute to community'},
    {id: 'q4', author:'Naveen', text:'Learn every single day !'},
];


const QuoteDetail = () => {
  
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found</p>
    }

    return (
      <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path="/quotes/:quoteId/comments">
          <Comments />
        </Route>
      </Fragment>
    );
}
export default QuoteDetail;