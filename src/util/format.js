/**
 * Exports a function that formats the price to BRL Currency
 */
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})