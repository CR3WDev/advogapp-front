export const useValidateCpfs = (value: any) =>{
  value = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

  // Verifica se o value possui 11 dígitos
  if (value.length !== 11) {
      return false;
  }

  // Verifica se todos os dígitos são iguais, o que tornaria o value inválido
  if (/^(\d)\1{10}$/.test(value)) {
      return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(value.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica se o primeiro dígito verificador está correto
  if (digitoVerificador1 !== parseInt(value.charAt(9))) {
      return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(value.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica se o segundo dígito verificador está correto
  if (digitoVerificador2 !== parseInt(value.charAt(10))) {
      return false;
  }

  // Se passou por todas as verificações, o value é válido
  return true;
}
