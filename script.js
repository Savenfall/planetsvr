AFRAME.registerComponent('audiohandler', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#mercurySound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler1', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#venusSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play()
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
         AFRAME.registerComponent('audiohandler2', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#earthSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler3', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#marsSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler4', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#jupiterSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler5', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#saturnSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler6', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#ringsSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler7', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#uranusSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler8', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#neptuneSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
        AFRAME.registerComponent('audiohandler9', {
  init:function() {
     let playing = false;
     let audio = document.querySelector("#plutoSound");
     this.el.addEventListener('click', () => {
          if(!playing) {
              audio.play();
           } else {
              audio.pause();
              audio.currentTime = 0;
           }
           playing = !playing;
     });
  }
        })
    AFRAME.registerComponent('ambientstop', {
    init:function() {
        let playing = false;
        let audio = document.querySelector("#ambient");
        this.el.addEventListener('click', () => {
            if(!playing) {
                audio.pause();
            } else {
                audio.play();
            }
            playing = !playing;
            });
            }
        })
