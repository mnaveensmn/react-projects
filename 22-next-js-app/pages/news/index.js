import { Fragment } from "react";
import Link from 'next/link';
const NewsPage = () => {
    return (
      <Fragment>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="/news/artical1">Artical 1</Link>
          </li>
          <li>
            <Link href="/news/artical2">Artical 2</Link>
          </li>
          <li>
            <Link href="/news/artical3">Artical 3</Link>
          </li>
          <li>
            <Link href="/news/artical4">Artical 4</Link>
          </li>
        </ul>
      </Fragment>
    );
}

export default NewsPage;

