# pi-day-backend

Backend API for the Pi Day 2025 event.

## 🧞 Commands

The following commands are available:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run build`           | Build production code to `./dist/`               |
| `npm run dev`             | Start development server                         |

## 🚀 Deployment

Docker is used to deploy the application. The following commands are available:

| Command                                                                | Action                                           |
| :--------------------------------------------------------------------- | :----------------------------------------------- |
| `docker build -t pi-day-backend -f ./deploy/Dockerfile .`              | Build the Docker image                           |
| `docker run -d --name pi-day-backend -p 8080:8080 pi-day-backend`      | Run the Docker container                         |
| `docker stop pi-day-backend`                                           | Stop the Docker container                        |


## 📝 License

This project is licensed under the MIT License - see the `LICENSE` file for details.
