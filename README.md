# Manipal Hackathon 2024 README Template

**Team Name:** `<Insert Team Name>`

**Problem Statement:** `<Insert Problem Statement>`

## 📜 Introduction

Our project allows `<insert consumer segment>` to do A, B and C by D, E and F. We have utilised X, Y and Z technologies to do P, Q and R.

## ✨ Features

App:

-   Ultra cool feature #1
-   Pro max feature #2
-   Feature #3

Website:

-   Ultra cool feature #1
-   Pro max feature #2
-   Feature #3

## 🟢 Access

🌐 Website link: https://example.com

📱 App's APK file location: [`android/build/my-app.apk`](android/build/my-app.apk)

OR

📱 Play store link: https://play.google.com/store/apps/details?id=com.digilocker.android

## 📦 Instructions For Local Deployment With Docker (Optional)

To deploy the application locally using docker, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-team-repo/manipal-hackathon-2024.git
    cd manipal-hackathon-2024
    ```

1. Build the docker image

    ```bash
    sudo docker build -t hackathon .
    ```

1. Start a container using the built image and expose necessary ports

    ```bash
    sudo docker run -it --rm -p 3000:3000 hackathon
    ```

1. Access the application at http://localhost:3000

## ⚙️ Instructions For Local Deployment Without Docker

```
Python version: 3.10

Operating system: Ubuntu 22
```

Follow these steps to run the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-team-repo/manipal-hackathon-2024.git
    cd manipal-hackathon-2024
    ```

1. Install dependencies

    ```bash
    npm install
    ```

1. Start server

    ```bash
    npm run start
    ```

1. Access the application at http://localhost:3000
