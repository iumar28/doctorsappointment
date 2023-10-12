
```markdown

This is a simple Node.js application for an out-patient appointment system. Doctors can be listed, their details viewed, and appointments can be booked through this API.

## Installation

1. Clone the repository:

2. Install dependencies using npm:

   npm install

3. Start the server:

   nodemon App.js

   The server will run on `http://localhost:3000`.

## API Endpoints

### List Doctors

- **Endpoint:** `/api/doctors`
- **Method:** GET
- **Description:** Get a list of all doctors.
- **Sample Request:**
  ```
  GET http://localhost:3000/api/doctors
  ```

### View Doctor Details

- **Endpoint:** `/api/doctors/:id`
- **Method:** GET
- **Description:** Get details of a specific doctor by providing their `id`.
- **Sample Request:**
  ```
  GET http://localhost:3000/api/doctors/1
  ```

### Book an Appointment

- **Endpoint:** `/api/appointments`
- **Method:** POST
- **Description:** Book an appointment with a doctor by providing `doctorId` and `patientName`.
- **Sample Request:**
  ```
  POST http://localhost:3000/api/appointments
  Content-Type: application/json

  {
    "doctorId": 1,
    "patientName": "Dr. Batra"
  }
  ```

## Testing with Postman

1. Download and install [Postman](https://www.postman.com/).

2. Launch Postman and create a new request.

3. Set the request method to `POST` or `GET` based on the endpoint you want to test.

4. Enter the request URL. For example, if you want to list doctors, use `http://localhost:3000/api/doctors`.

5. Set any required headers (e.g., `Content-Type` for POST requests).

6. In the "Body" tab, provide the necessary data as per the API endpoint you are testing.

7. Click the "Send" button to execute the request.

8. Examine the response to verify the functionality of the API.

## Example Requests

### List Doctors

- Method: GET
- URL: `http://localhost:3000/api/doctors`

### View Doctor Details

- Method: GET
- URL: `http://localhost:3000/api/doctors/1`

### Book an Appointment

- Method: POST
- URL: `http://localhost:3000/api/appointments`
- Headers: `Content-Type: application/json`
- Body:
  ```json
  {
    "doctorId": 1,
    "patientName": "John Doe"
  }
  ```
