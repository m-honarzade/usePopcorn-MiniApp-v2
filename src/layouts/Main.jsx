import { Container } from "postcss";

const Main = ({ children }) => {
  return (
    <div className="container max-w-4xl mx-auto my-4  flex flex-row flex-grow gap-2   ">
      {children}
    </div>
  );
};

export default Main;
