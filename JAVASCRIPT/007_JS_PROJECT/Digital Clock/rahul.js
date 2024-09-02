const clock = document.getElementById('clock');
// document.querySelector('#clock')

// Set Interval method tell us howmuch time interval we can run contionusly..
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)