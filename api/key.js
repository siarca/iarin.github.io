module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Content-Disposition': 'inline'
  });
  
  const publicKey = `-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEfmwRWPIGdSsbPuRCFYL1hIvvWW2h\nh1yiQRUzG+HhLSxx/L+AE/DkeM7v14f1UrDKasO9gNVNh+Lyysxt08GDIw==\n-----END PUBLIC KEY-----`;
  
  res.end(publicKey);
};
