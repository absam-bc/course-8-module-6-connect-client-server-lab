const eventList = document.querySelector("#event-list");
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");


// Display an event on the page.
function renderEvent(event) {
    const li = document.createElement("li");
    li.textContent = event.title;
    eventList.appendChild(li);
}


// Get existing events from Flask.
function loadEvents() {
    fetch("http://localhost:5000/events")
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load events");
            }
            return response.json();
        })
        .then(events => {
            eventList.innerHTML = "";
            events.forEach(renderEvent);
        })
        .catch(error => {
            console.error(error);
        });
}


// Submit a new event to Flask.
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();

    if (!title) {
        alert("Please enter an event title.");
        return;
    }

    fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: title })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not add event");
            }
            return response.json();
        })
        .then(event => {
            renderEvent(event);
            form.reset();
        })
        .catch(error => {
            console.error(error);
            alert("Something went wrong. Please try again.");
        });
});


// Load events when the page opens.
loadEvents();
