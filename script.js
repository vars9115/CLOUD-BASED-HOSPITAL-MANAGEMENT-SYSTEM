function showSection(sectionName) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionName).classList.remove("hidden");
}


// Add Patient

document.getElementById("patientForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const patient = {
        name: document.getElementById("patientName").value,
        age: document.getElementById("patientAge").value,
        gender: document.getElementById("patientGender").value,
        disease: document.getElementById("patientDisease").value
    };

    fetch("/add_patient", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
    })
    .then(response => response.json())
    .then(data => {

        alert(data.message);

        document.getElementById("patientForm").reset();

        location.reload();

    });

});


// Book Appointment

document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const appointment = {

        patient: document.getElementById("appointmentPatient").value,

        doctor: document.getElementById("appointmentDoctor").value,

        date: document.getElementById("appointmentDate").value,

        time: document.getElementById("appointmentTime").value

    };

    fetch("/add_appointment", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(appointment)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        document.getElementById("appointmentForm").reset();

        location.reload();

    });

});