import { useParams } from "react-router-dom";

function CityDetails() {

    const {id} = useParams();

  return (
    <>
    {id}
    </>
  );
}

export default CityDetails;
