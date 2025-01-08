# DevOps Learning App

This project is a simple Node.js web application integrated with a Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate testing and deployment. It serves as a learning tool for DevOps practices.

## Features

- Express.js web server
- Responsive front-end design using Tailwind CSS
- Automated testing with Jest
- CI/CD pipeline using GitHub Actions
- Deployment to Vercel

## Prerequisites

- Node.js (v18.x or later)
- npm (v8.x or later)
- Git

## Installation

1. Clone the repository:
   ``` bash
   git clone https://github.com/yourusername/devops-learning-app.git
   cd devops-learning-app
   ```

2. Install dependencies:
   ``` bash
   npm install
   ```

## Running the Application

To start the server locally:

``` bash
npm start
```

The application will be available at \`http://localhost:3000\`.

For development with auto-restart on file changes:

```
npm run dev
```

## Running Tests

To run the test suite:

```
npm test
```

For watching file changes and re-running tests:

```
npm run test:watch
```

## Deployment

This project is set up for automatic deployment to Vercel when changes are pushed to the main branch. The deployment is handled by GitHub Actions.

To deploy manually:

1. Install the Vercel CLI:
   ```
   npm i -g vercel
   ```

2. Run the deployment command:
   ```
   vercel --prod
   ```

## Project Structure

- `app.js`: Main application file
- `server.js\`: Server startup file
- `public/index.html`: Main HTML file for the front-end
- `app.test.js`: Test file for the application
- `.github/workflows/ci-cd.yml`: GitHub Actions workflow for CI/CD
- `vercel.json`: Vercel deployment configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - [@mohamedkartit4](https://x.com/mohamedkartit4) - mkartit9@gmail.com

Project Link: [https://github.com/MohamedKartit/devops-learning-app](https://github.com/MohamedKartit/devops-learning-app)

