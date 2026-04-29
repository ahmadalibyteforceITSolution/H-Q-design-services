export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, location, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the submission (in production, this would go to a database or email)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      service,
      location,
      message,
      timestamp: new Date().toISOString()
    });

    // In a real scenario, you'd use nodemailer or a service like SendGrid here.
    // Since we don't have API keys/SMTP setup, we return success.
    
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. Our team will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}