import dbConnect from './dbConnect.js';
import Contact from './models/Contact.js';

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
    console.log('Connecting to DB...');
    await dbConnect();
    console.log('DB Connected successfully');
    
    const { name, email, phone, service, location, message } = req.body;
    console.log('Received data:', { name, email, phone, service, location, message });

    if (!name || !email || !message) {
      console.log('Missing fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Save to MongoDB
    console.log('Saving to MongoDB...');
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      location,
      message
    });

    console.log('Contact Saved to DB:', contact._id);

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been received. Our team will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}