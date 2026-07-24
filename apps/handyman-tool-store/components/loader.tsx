import { LoaderCircle } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col gap-4">
      <LoaderCircle className="animate-spin" size={40} />
      <div className="text-lg">Please wait...</div>
    </div>
  );
}

export default Loader;
