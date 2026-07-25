import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div 
      className="relative mx-auto max-w-2/3 w-full"
    >
      <Outlet />
    </div>
  );
}

export default ContentLayout;