const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CI/CD Pipeline Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background: #0D0D0D;
            color: #E0E0E0;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            padding: 2rem;
          }
          main { max-width: 32rem; }
          .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #32D74B;
            margin-right: 8px;
            vertical-align: middle;
          }
          h1 { font-size: 1.25rem; font-weight: 600; margin: 0 0 1rem; }
          p { color: #9CA3AF; line-height: 1.6; margin: 0 0 1rem; font-size: 14px; }
          code { color: #FF6B35; }
        </style>
      </head>
      <body>
        <main>
          <p><span class="dot"></span>Deployed and healthy</p>
          <h1>CI/CD Pipeline Demo</h1>
          <p>
            This is a minimal Express app used as the test subject for a
            push-to-deploy pipeline. The app is intentionally simple — the
            pipeline is the project.
          </p>
          <p>
            Last deploy: <code>${new Date().toISOString()}</code>
          </p>
        </main>
      </body>
    </html>
  `);
});

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})