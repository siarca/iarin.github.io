module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const publicKey = `-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfmwRWPIGdSsbPuRCFYL1hIvvWW2h\nh1yiQRUzG+HhLSxx/L+AE/DkeM7v14f1UrDKasO9gNVNh+Lyysxt08GDIw==\n-----END PUBLIC KEY-----`;
  
  res.status(200).send(publicKey);
};
