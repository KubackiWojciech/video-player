const videoSources = [
    'https://filesamples.com/samples/video/webm/sample_1280x720_surfing_with_audio.webm',
    'https://filesamples.com/samples/video/webm/sample_1280x720_surfing_with_audio.webm',
    'https://filesamples.com/samples/video/webm/sample_960x400_ocean_with_audio.webm',
    'https://filesamples.com/samples/video/mp4/sample_1280x720_surfing_with_audio.mp4'
]

function renderVideo(index) {
    const player = document.getElementById('player');

    player.className = 'video-box';
    
    const videoSrc = document.getElementById('video-src');
    videoSrc.src = videoSources[index];
}