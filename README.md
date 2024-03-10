# Simple Backend API

This repository contains a simple backend API that responds to GET requests on the `/sayHello` route with a JSON object `{"message": "Hello User"}`. It's built with Node.js and Express and is designed to run on port 80.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js (https://nodejs.org/)
- npm (Comes with Node.js)

### Installing

A step-by-step series of examples that tell you how to get a development env running:

1. Clone the repository to your local machine:
    ```
    git clone <repository-URL>
    ```
2. Navigate into the project directory:
    ```
    cd <project-directory>
    ```
3. Install dependencies:
    ```
    npm install
    ```
4. Start the server:
    ```
    node index.js
    ```

The server should start, and you should see a message indicating it's running on port 80.

## Running the tests

To test that the API is working as expected, you can send a GET request to `/sayHello`. This can be done using a browser or a tool like Postman.

Example:

Response:

```json
{
  "message": "Hello User"
}
Ensure your GitHub Actions workflow has successfully deployed the API to the virtual machine. You can verify this by checking the Actions tab in your GitHub repository for a completed deployment job.

On your local machine, use a tool like Postman or a simple curl command to send a GET request to the virtual machine's IP address on the /sayHello route. Replace 20.2.219.6 with the IP address of your VM.

Example using curl:
curl http://20.2.219.6/sayHello

{
  "message": "Hello User"
}
