const Background = ({ children }) => {
  return (
    <div
     className="relative flex flex-col min-h-screen bg-[#0B1F17] text-[#F4F5F0]"
    >
      {children}
    </div>
  );
}

export default Background;