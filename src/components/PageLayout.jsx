import Navbar from "./Navbar";

const PageLayout = ({ isAuth, setIsAuth }) => {
  return (
    <>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
};

export default PageLayout;
