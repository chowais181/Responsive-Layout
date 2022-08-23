import { Link } from "react-router-dom";
export default function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">
          <h1>Go to the home page</h1>
        </Link>
      </p>
    </div>
  );
}
