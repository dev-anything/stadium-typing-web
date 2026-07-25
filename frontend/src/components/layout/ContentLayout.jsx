import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div 
      className="relative mx-auto max-w-250 pt-8 w-full flex-1"
    >
      <Outlet />
    </div>
  );
}

export default ContentLayout;