/**
 * Author: Elijah Sawyers
 * Email: elijahsawyers@gmail.com
 */

/* -- Imports -- */
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const fs = require('fs');
const jsonschema = require('jsonschema');
const nodemailer = require('nodemailer');

/* -- Constants -- */
const TO_EMAIL = 'elijahsawyers@gmail.com';

/* -- Configuration -- */
const service = express();
service.use(cors({
  origin: 'https://elijahsawyers.me',
}))
service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

/* -- Enpoints -- */
service.post('/', (req, res) => {
  const json = req.body;
  const schema = JSON.parse(fs.readFileSync(
      `${__dirname}/schemas/mail.schema.json`,
      'utf8'
  ));
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  const validator = new jsonschema.Validator();

  const result = validator.validate(json, schema);

  if (result.valid) {
    const mail = {
      from: `"${json.name}"${json.email}`,
      to: TO_EMAIL,
      subject: json.subject,
      text: `
        Name: ${json.name}
        Email: ${json.email}
        
        ${json.message}
      `
    };

    transporter.sendMail(mail, (err) => {
      if (err) console.log(err);
    });

    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

/* -- Start the server -- */
service.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
