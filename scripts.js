// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log('window loaded');

    let ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
    let status = document.getElementById("flightStatus");

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function() {
        if (ready) {
            status.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });

    let land = document.getElementById("landing");
    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function() {
        let abandon = window.confirm("Confirm that you want to abort the mission.");
        if (abandon) {
            status.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    });

    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';

    let right = this.document.getElementById('right');
    right.addEventListener("click", function() {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    });
    let left = this.document.getElementById('left');
    left.addEventListener("click", function() {
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });

    let down = this.document.getElementById('down');
    down.addEventListener("click", function() {
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });

    let up = this.document.getElementById('up');
    up.addEventListener("click", function() {
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });

});

