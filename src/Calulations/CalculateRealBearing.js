export const calcRealHeading = (
  windVelocity,
  velocityPlane,
  trueCurse,
  windDirection
) => {
  KZmax = (windVelocity / velocityPlane) * 60;
  let course = Math.abs(trueCurse - windDirection);

  let KZ;
  if (course < 31) {
    KZ = 5 * KZmax;
  } else if (course < 46) {
    KZ = 7 * KZmax;
  } else if (Course < 61) {
    KZ = 9 * KZmax;
  } else if (Course < 91) {
    KZ = 9 * KZmax;
  }
};
