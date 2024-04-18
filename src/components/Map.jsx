import { useParams, useSearchParams } from "react-router-dom";

function Map() {

    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng')

  return (
    <>
        <div>
            {lat}
            {lng}
        </div>
    </>
  );
}

export default Map;
