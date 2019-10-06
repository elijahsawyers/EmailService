# email-service
> The email service for elijahsawyers.me

A simple email service that can be used to send emails from POST data. This is intended to be used alongside an HTML form (I.e: a great way to get a contact form up and running on a website)!

# Getting Started
## Running the project
1. Install dependencies:
```sh
git clone https://github.com/elijahsawyers/email-service.git
cd email-service/
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
5. Change the CORS origin in src/service.js to 'localhost' or delete the CORS middleware.
6. Run the service:
```sh
node src/service.js
```

**Now any data posted to localhost will be send in an email to the email address specified in the TO_EMAIL constant!**

# Built With
* [Node.js](https://nodejs.org)

# Authors
* [Elijah Sawyers](https://github.com/elijahsawyers)
