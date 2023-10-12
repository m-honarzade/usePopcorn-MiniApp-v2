const NumResults = ({ movies }) => {
  return (
    <p className="text-white ">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default NumResults;
