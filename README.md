# DevOps with Docker

My hands-on exercises and activities completed during the **DevOps with Docker** 
course conducted by the **University of Helsinki**.

## Course Info
- **Course:** DevOps with Docker, Spring 2026
- **Institution:** University of Helsinki
- **Platform:** [mooc.fi](https://www.mooc.fi/en/)
- **Status:** Ongoing

## About
This repository contains small exercises and activities practiced throughout 
the course — covering Docker commands, concepts, and configurations.

# express-ci-cd-demo


A simple Node.js/Express app with a fully automated CI/CD pipeline.

> **[Folder Link](./express-ci-cd-demo/)**

### Deployment Pipeline

Every push to `main` triggers a GitHub Actions workflow that:
1. Builds the Docker image
2. Pushes it to Docker Hub as `hasithaea/express-ci-cd-demo:latest`
3. Triggers a redeployment on Render

### Deployed Application

https://ci-cd-demo-of6g.onrender.com/

## Related Repository
- [material-applications](https://github.com/hasithaea/material-applications) 
  — Course provided projects where Docker concepts are applied

## Tools Used
- Docker
- Docker Compose

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENCE.md) file for details.