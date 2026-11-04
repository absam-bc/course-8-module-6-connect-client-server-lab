# Client-Server Application - Event Catalog

## Overview

A simple event catalog web application built with Flask, HTML, CSS, and JavaScript.

The frontend communicates with the Flask backend using JavaScript fetch() requests and JSON.

## Features

- Display events from the Flask backend.
- Add new events using an HTML form.
- Retrieve events using GET requests.
- Add events using POST requests.
- Dynamically update the page without refreshing.
- Validate event titles.
- Return JSON responses with appropriate HTTP status codes.

## Project Structure

- `server.py` - Flask backend and API routes.
- `data.py` - Event data file.
- `client/index.html` - Webpage structure.
- `client/script.js` - JavaScript fetch requests and DOM updates.
- `client/styles.css` - Frontend styling.
- `tests/test_app.py` - Automated backend tests.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Return a welcome message |
| GET | `/events` | Retrieve all events |
| POST | `/events` | Add a new event |

## Installation

Install the project dependencies:

`pipenv install`

## Run the Application

Start the Flask server:

`pipenv run python server.py`

Open `client/index.html` in your browser.

## Run Tests

`pipenv run python -m pytest -v`

## Technologies

- Python
- Flask
- Flask-CORS
- HTML
- CSS
- JavaScript
- Fetch API
- JSON
- Pytest

## Author

Abdulsalam
