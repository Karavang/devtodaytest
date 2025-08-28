# Calendar Holidays API

A Node.js + TypeScript application to fetch public holidays from the Nager API and store them in a MongoDB calendar for users.

Built with **Express**, **TypeScript**, **Mongoose**, and **Axios**.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Karavang/devtodaytest.git
cd devtodaytest
npm install
npm run build
npm start
```

- MongoDB must be installed and running on your device, or accessible via a cloud provider like MongoDB Atlas.

### Countries Router (`/countries`)

| Method | Endpoint           | Description                                    | Request Body | Response                         |
| ------ | ------------------ | ---------------------------------------------- | ------------ | -------------------------------- |
| GET    | `/countries`       | Fetch a list of all countries                  | None         | JSON array of countries          |
| GET    | `/countries/:code` | Fetch details about a specific country by code | None         | JSON object with country details |
| GET    | `/test-objectid`   | Get a valid id for mongodb                     | None         | JSON object with testUserId      |

### Users Router (`/users`)

| Method | Endpoint                           | Description                                                                                  | Request Body                                                                                      | Response                          |
| ------ | ---------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------- |
| POST   | `/users/:userId/calendar/holidays` | This endpoint allows a user to add national holidays of a specific country to their calendar | JSON: `{ "countryCode": "US", "year": 2025, "holidays": ["New Year's Day", "Independence Day"] }` | JSON object of the saved calendar |
