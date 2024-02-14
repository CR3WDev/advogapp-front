export const useGetIdByURL = (value: string) => {
  const urlAtual = window.location.href
  var partesDaUrl = urlAtual.split(value)
  return partesDaUrl[1] || undefined
}
