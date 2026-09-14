/**
 * Safe WhatsApp Redirect Generator
 * Routes through /go/whatsapp to prevent web crawlers (like Semrush, Ahrefs, Googlebot)
 * from triggering HTTP 429 rate limits on wa.me and generating broken link warnings.
 */

export const DEFAULT_WHATSAPP_NUMBER = '966507143124'
export const PK_WHATSAPP_NUMBER = '923416887454'

export const getWhatsAppUrl = (phone = DEFAULT_WHATSAPP_NUMBER, text = '') => {
  const cleanPhone = String(phone).replace(/[^0-9]/g, '') || DEFAULT_WHATSAPP_NUMBER
  let url = `/go/whatsapp?phone=${cleanPhone}`
  if (text) {
    url += `&text=${encodeURIComponent(text)}`
  }
  return url
}

export const openWhatsApp = (phone = DEFAULT_WHATSAPP_NUMBER, text = '') => {
  const cleanPhone = String(phone).replace(/[^0-9]/g, '') || DEFAULT_WHATSAPP_NUMBER
  let directUrl = `https://wa.me/${cleanPhone}`
  if (text) {
    directUrl += `?text=${encodeURIComponent(text)}`
  }
  if (typeof window !== 'undefined') {
    window.open(directUrl, '_blank', 'noopener,noreferrer')
  }
}
