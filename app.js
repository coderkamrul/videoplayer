var video = document.querySelector('#video');
var progress = document.querySelector('.video-line');
var videoWatch = document.querySelector('.video-watch');
var btn = document.getElementById('play-pause');
var volume = document.querySelector('.valume');
var currentTimeElement = document.querySelector('.current');
var durationTimeElement = document.querySelector('.duration');
var next = document.querySelector('#next');
var glo = document.querySelector('.video-glo');
var sound = document.querySelector('.sound');


function togglePlayPause() {
    if(video.paused){
        btn.className = "pause";
        video.play();
    }else{
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}

video.addEventListener('timeupdate', function() {
    var videoWatchp = video.currentTime / video.duration;
    videoWatch.style.width = videoWatchp * 100 + "%";
    glo.style.marginLeft = videoWatchp * 100 + "%";
    currentTime();
    if(video.ended) {
        btn.className = "play";
    }
})
video.addEventListener('click', function() {
    if (video.paused) {
        btn.className = "pause";
        video.play();
    } else {
        btn.className = "play";
        video.pause();
    }
})


// volume
 volume.addEventListener('mousemove', function(e) {
    video.volume = e.target.value;
 })

//  current time and duration

const currentTime = () => {
    let currentMinutes = Math.floor(video.currentTime / 60);
    let currentSecond = Math.floor(video.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(video.duration / 60);
    let durationSecond = Math.floor(video.duration -durationMinutes * 60);
    if(video.duration){

        currentTimeElement.innerHTML = `${currentMinutes}:${currentSecond < 10 ? '0'+currentSecond : currentSecond}`
        durationTimeElement.innerHTML = `${durationMinutes}:${durationSecond}`
    }
}

progress.addEventListener('click', (e) => {
    const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = progressTime;
})

next.addEventListener('click', (e) => {
    video.setAttribute('src','video.mp4');
    video.play();
    btn.className = "pause";
})

sound.addEventListener('click', (e) => {
    volume.classList.toggle("show");
})