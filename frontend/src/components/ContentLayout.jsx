import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div 
      className="relative mx-auto max-w-3xl w-full"
    >
      <Outlet />
    </div>
  );
}

export default ContentLayout;