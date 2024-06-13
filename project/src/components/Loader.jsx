import { ClipLoader } from "react-spinners";
import '../styles/Loader.css'

function Loader() {
  return (
    <div className="clipLoaderContianer">
      <ClipLoader
        color="#fff"
        size={120}
        aria-label="Loading..."
        data-testid="loader"
      />
      <span>Loading...</span>
    </div>
  );
}

export default Loader;
