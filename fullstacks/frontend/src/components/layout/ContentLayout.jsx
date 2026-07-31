import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div 
      className="relative flex flex-col justify-center mx-auto max-w-250 w-full flex-1"
    >
      <Outlet />
    </div>
  );
}

export default ContentLayout;