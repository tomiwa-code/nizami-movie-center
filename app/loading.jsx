import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-dark flex items-center justify-center">
      <DotLoader color="#f1f1f1" size={60} />
    </div>
  );
};

export default Loading;
