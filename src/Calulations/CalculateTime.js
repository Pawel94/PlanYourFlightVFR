export const calculateTime = (dist, velocity) => {
  // velocity *= 1.852;
  velocity /= 60;
  return Math.floor(dist / velocity);
};
