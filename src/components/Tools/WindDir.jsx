// É, ÉK, K, DK, D, DN, N, ÉN
export const WindDir = ({ dirDegree }) => {
  if(dirDegree >= 0 && dirDegree < 22.5) return (<span>(É)</span>)
  if(dirDegree >= 22.5 && dirDegree < 67.5) return (<span>(ÉK)</span>)
  if(dirDegree >= 67.5 && dirDegree < 112.5) return (<span>(K)</span>)
  if(dirDegree >= 112.5 && dirDegree < 157.5) return (<span>(DK)</span>)
  if(dirDegree >= 157.5 && dirDegree < 202.5) return (<span>(D)</span>)
  if(dirDegree >= 202.5 && dirDegree < 247.5) return (<span>(DNY)</span>)
  if(dirDegree >= 247.5 && dirDegree < 292.5) return (<span>(NY)</span>)
  if(dirDegree >= 292.5 && dirDegree < 337.5) return (<span>(ÉNY)</span>)
  if(dirDegree >= 337.5 && dirDegree < 360) return (<span>(É)</span>)
  return (<span>?</span>)
};
