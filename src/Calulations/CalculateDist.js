export const calcCoordinatesToDistance = (lat1, lon1, lat2, lon2) => {
  //let lat1 = userCoordinates.lat;
  // let lon1 = userCoordinates.lng;

  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
};

function toRad(Value) {
  return (Value * Math.PI) / 180;
}
