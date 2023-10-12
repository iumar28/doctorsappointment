const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());


let doctors = [
    { id: 1, name: 'Dr. Smith', maxPatients: 10 },
    { id: 2, name: 'Dr. Johnson', maxPatients: 5 },
];

let appointments = [];


app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});


app.get('/api/doctors/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(d => d.id === doctorId);
    
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ error: 'Doctor not found' });
    }
});

// API endpoint to book an appointment
app.post('/api/appointments', (req, res) => {
    const { doctorId, patientName } = req.body;
    const doctor = doctors.find(d => d.id === doctorId);

    if (doctor) {
        if (doctor.maxPatients > 0) {
            doctor.maxPatients--;
            const appointment = {
                doctor: doctor.name,
                patient: patientName,
            };
            appointments.push(appointment);
            res.json(appointment);
        } else {
            res.status(400).json({ error: 'Doctor is fully booked.' });
        }
    } else {
        res.status(404).json({ error: 'Doctor not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
