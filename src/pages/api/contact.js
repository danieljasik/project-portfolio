export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    // W prawdziwej aplikacji: wysyłka emaila, zapis do bazy danych
    console.log('Contact form submission received:');
    console.log({ name, email, message });

    res.status(200).json({
      success: true,
      message: 'Message received. Welcome to the Matrix...',
    });
  } else {
    // Obsługuj inne metody HTTP
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}