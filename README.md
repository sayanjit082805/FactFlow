# FactFlow

FactFlow is a web-based application which fetches random facts. Powered by the API Ninjas facts API.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-374151.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CBD5E1.svg?style=for-the-badge&logo=tailwind-css&logoColor=38bdf8)
![Vite](https://img.shields.io/badge/Vite-9333EA.svg?style=for-the-badge&logo=vite&logoColor=fff)

## Features

- Get thousands of andom facts.
- Powered by [API-Ninjas](https://api-ninjas.com).
- Toast notifications using [react-toastify](https://fkhadra.github.io/react-toastify/introduction/).
- Small loading animations using [React Spinners](https://mhnpd.github.io/react-loader-spinner/).

# Showcase

## Screenshots

![](https://raw.githubusercontent.com/sayanjit082805/FactFlow/main/demo/ss1.png)

![](https://raw.githubusercontent.com/sayanjit082805/FactFlow/main/demo/ss2.png)

![](https://raw.githubusercontent.com/sayanjit082805/FactFlow/main/demo/ss3.png)

## Prerequisites

- Node.js (v-14 or later)
- npm or yarn
- API-Ninjas API key

## Installation

### Initial Setup

First, head over to [API-Ninjas](https://api-ninjas.com) and generate your own API-Key, it's completely free. Then, follow the below mentioned steps :

- Clone the repository.

```bash
git clone https://github.com/sayanjit082805/FactFlow.git
cd FactFlow
```

- Install dependencies with `npm install`

- Create a .env file in the root directory of the project and enter your api key like this:

```
VITE_API_KEY = 'your-api-key'
```

### Running

- Start the application with `npm run dev`.
- Next, open your browser and navigate to `http://localhost:5173` or the port as specified by vite.

## Acknowledgements

- The API is provided by API-Ninjas.

## Contributing

Contributions are always welcome!

- Fork the repository

- Create a new branch `(git checkout -b feature-branch)`

- Commit your changes `(git commit -m 'Add new feature')`

- Open a pull request

## License

This project is licensed under the Unlicense License. See the [LICENSE](LICENSE) file for details.
