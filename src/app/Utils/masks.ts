export function PhoneMask(value: string) {
    if (value) {
      const cleaned = value.replace(/\D/g, ''); // Remove todos os não dígitos
  
      // Verifica se o número tem pelo menos 2 dígitos antes de aplicar a máscara
      if (cleaned.length >= 2) {
        // Verifica se o número de telefone é um celular (11 dígitos) ou fixo (10 dígitos)
        if (cleaned.length === 11) { // Telefone celular
          const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
          if (match) {
            let formattedValue = `(${match[1]})`;
  
            if (match[2]) {
              formattedValue += ` ${match[2]}`;
            }
  
            if (match[3]) {
              formattedValue += `-${match[3]}`;
            }
  
            return formattedValue;
          }
        } else if (cleaned.length === 10) { // Telefone fixo
          const match = cleaned.match(/^(\d{2})(\d{0,4})(\d{0,4})$/);
          if (match) {
            let formattedValue = `(${match[1]})`;
  
            if (match[2]) {
              formattedValue += ` ${match[2]}`;
            }
  
            if (match[3]) {
              formattedValue += `-${match[3]}`;
            }
  
            return formattedValue;
          }
        }
      }
    }
  
    return value;
  }
  