export const useGetParams = () => {
  const queryString = window.location.search

  // Divide a string de consulta usando "?params=" como delimitador
  const paramsString = queryString.split('?params=')[1]
  return paramsString
}
