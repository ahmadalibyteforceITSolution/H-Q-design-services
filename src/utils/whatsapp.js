/**
 * Direct WhatsApp opener utility
 * Opens WhatsApp in a new tab/window for visitors without exposing raw <a> links to SEO crawlers.
 */

export const DEFAULT_WHATSAPP_NUMBER = '966507143124'
export const PK_WHATSAPP_NUMBER = '923416887454'

export const getWhatsAppUrl = (phone = DEFAULT_WHATSAPP_NUMBER, text = '') => {
  const cleanPhone = String(phone).replace(/[^0-9]/g, '') || DEFAULT_WHATSAPP_NUMBER
  let directUrl = `https://wa.me/${cleanPhone}`
  if (text) {
    directUrl += `?text=${encodeURIComponent(text)}`
  }
  return directUrl
}

export const openWhatsApp = (phone = DEFAULT_WHATSAPP_NUMBER, text = '') => {
  const url = getWhatsAppUrl(phone, text)
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

