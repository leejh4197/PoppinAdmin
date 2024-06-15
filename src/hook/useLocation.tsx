import { useEffect, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const useLocation = (address: string) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  console.log(location);

  useEffect(() => {
    if (!address) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(
      address,
      function (result: { x: string; y: string }[], status: string) {
        console.log(result, status);
        if (status === "OK") {
          const { x, y } = result[0];
          setLocation({ latitude: y, longitude: x });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      }
    );
  }, [address]);

  return location;
};

export default useLocation;
