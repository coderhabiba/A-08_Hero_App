
const PageNotFound = () => {
  return (
    <div>
      <div>
        <img src="https://i.ibb.co.com/DDV1Yyhn/App-Error.png" alt="404" />
      </div>
      <div>
        <h2 className="mt-4">Oops, page not found!</h2>
        <p className="mt-2">The page you are looking for is not available.</p>
        <button className="btn btn-primary mt-4">Go Back!</button>
      </div>
    </div>
  );
};

export default PageNotFound;