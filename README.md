# Email Service
> A backend email service that can be used to send email from an HTML form.

This repository drives the contact form on my [personal website](https://elijahsawyers.me/). This is a great service to get a contact form up and running on any website!

# Getting Started
## Running the project locally
1. Install dependencies:
```sh
npm install
```
2. Create .env file with the following values:
```sh
EMAIL=email # The sender email.
PASSWORD=password # The sender email password.
PORT=port # The port to expose.
```
3. Change the transporter service in src/service.js to the sender email provider.
4. Change the TO_EMAIL constant in src/service.js to the email address that you'd like to receive emails.
5. Change the CORS origin in src/service.js to 'localhost'.
6. Run the service:
```sh
node src/service.js
```

# Built With
* [Node.js](https://nodejs.org)

# Authors
* [Elijah Sawyers](https://github.com/elijahsawyers)
