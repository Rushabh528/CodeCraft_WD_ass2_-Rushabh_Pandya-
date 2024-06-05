document.addEventListener('keypress', (event) => {
    key = event.key;
    tile = document.querySelectorAll('.tile')

    switch (key) {
        case 'a':
        case 'A':

            letter = document.getElementById('A')
            letter.innerHTML += '<audio id ="a" src="sounds/clap.wav"></audio>'
            audio = document.getElementById('a')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                A.classList.remove("playing")
            })
            break;
        case 's':
        case 'S':


            letter = document.getElementById('S')
            letter.innerHTML += '<audio id ="s" src="sounds/boom.wav"></audio>'
            audio = document.getElementById('s')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'd':
        case 'D':


            letter = document.getElementById('D')
            letter.innerHTML += '<audio id ="d" src="sounds/hihat.wav"></audio>'
            audio = document.getElementById('d')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'f':
        case 'F':


            letter = document.getElementById('F')
            letter.innerHTML += '<audio id ="f" src="sounds/kick.wav"></audio>'
            audio = document.getElementById('f')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'g':
        case 'G':


            letter = document.getElementById('G')
            letter.innerHTML += '<audio id ="g" src="sounds/openhat.wav"></audio>'
            audio = document.getElementById('g')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'h':
        case 'H':


            letter = document.getElementById('H')
            letter.innerHTML += '<audio id ="h" src="sounds/ride.wav"></audio>'
            audio = document.getElementById('h')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'j':
        case 'J':


            letter = document.getElementById('J')
            letter.innerHTML += '<audio id ="j" src="sounds/snare.wav"></audio>'
            audio = document.getElementById('j')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'k':
        case 'K':


            letter = document.getElementById('K')
            letter.innerHTML += '<audio id ="k" src="sounds/tink.wav"></audio>'
            audio = document.getElementById('k')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
        case 'l':
        case 'L':


            letter = document.getElementById('L')
            letter.innerHTML += '<audio id ="l" src="sounds/tom.wav"></audio>'
            audio = document.getElementById('l')
            // audio.currentTime = 0;
            letter.classList.add("playing")
            audio.play()
            document.addEventListener('keyup', () => {
                letter.classList.remove("playing")
            })
            break;
    }

})
