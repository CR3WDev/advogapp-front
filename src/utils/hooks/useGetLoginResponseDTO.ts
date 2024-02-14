export const useGetLoginResponseDTO = () => {
  const loginResponseDTOStringfy = sessionStorage.getItem('LoginResponseDTO')
  if (!loginResponseDTOStringfy) return undefined
  return JSON.parse(loginResponseDTOStringfy)
}
