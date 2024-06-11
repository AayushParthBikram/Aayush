const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFilePath = path.join(__dirname, '../data/event.json'); //This take all the data that has been created as the event by the user's after filling up the details given in the form.

// Read all events from JSON file

const readEvents = () => {
   try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data || '[]');
    
   } catch (err) {
    console.error('Error reading events file:', err);
    return [];
    
   }
};

// Write events to JSON file
const writeEvents = (events) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(events, null, 2));
};

// Get all events
router.get('/', (req, res) => {
    const events = readEvents();
    res.json(events);
});

// Get event by id
router.get('/:id', (req, res) => {
    const events = readEvents();
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (event) {
        res.json(event);
    } else {
        res.status(404).send('Event not found');
    }
});

// Create new event
router.post('/', (req, res) => {
    const events = readEvents();
    const newEvent = {
        id: events.length ? events[events.length - 1].id + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        totalParticipants: req.body.totalParticipants,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    };
    events.push(newEvent);
    writeEvents(events);
    res.status(201).json(newEvent);
});

module.exports = router;
