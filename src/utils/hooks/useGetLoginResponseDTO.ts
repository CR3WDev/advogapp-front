interface LoginResponseDTO {
  token: string,
  lawyerId: string,
  userId: string,
  role: string
}

export const useGetLoginResponseDTO = (): LoginResponseDTO | undefined => {
  const loginResponseDTOStringfy = sessionStorage.getItem('LoginResponseDTO')
  if (!loginResponseDTOStringfy) return undefined
  return JSON.parse(loginResponseDTOStringfy)
}

export const useSetLoginResponseDTO = (loginResponseDTO: LoginResponseDTO) => {
  const loginResponseDTOStringfy = JSON.stringify(loginResponseDTO)
  if (!loginResponseDTOStringfy) return undefined
  sessionStorage.setItem('LoginResponseDTO', loginResponseDTOStringfy)
}
