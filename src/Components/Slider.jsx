import { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

// eslint-disable-next-line react/prop-types
function Slider() {
  useEffect(() => {
    getTrendingMovies()
  },[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
        console.log("getting response from api ==> ", resp);
    })
  }
  return (
    <div>

    </div>
  );
}

export default Slider;
