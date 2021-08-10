export const isValidPos = (pos: any): any => {
  if (!pos) return false;
  if (!pos.lat || !pos.lng) return false;
  if (pos.lat === NaN || pos.lng === NaN) return false;
  return true;
}

export const getFormatedPos = (pos: any): any => {
  let position = {
    lat: typeof pos?.lat === 'number' ? pos?.lat : parseFloat(pos?.lat),
    lng: typeof pos?.lng === 'number' ? pos?.lng : parseFloat(pos?.lng),
  }

  return position;
}