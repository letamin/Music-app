window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [  //colors for the animations
        "#60D394",
        "#D36060",
        "#C060D3",
        "#D3D160",
        "#6860D3",
        "#60B2D3"
    ];
    
    const animation = [  //animations
        "triangle",
        "leftToRight",
        "rhombus",
        "random"
    ];
    
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
            
            //Create the bubbles for the animations
            createBubbles(index);
        })
    });
    
    function createBubbles(index) {
        const bubble = document.createElement('div');
        var random = animation[Math.floor(Math.random() * 4)];
        
        //This is one of the animations. The bubbles will display randomly on screen based on the screen width and height.
        var randomAnimationPositionWidth = Math.floor(Math.random() * screen.width);
        var randomAnimationPositionHeight = Math.floor(Math.random() * screen.height);
        randomAnimationPositionWidth += "px"; 
        randomAnimationPositionHeight += "px";
        document.documentElement.style.setProperty('--random-width', randomAnimationPositionWidth);
        document.documentElement.style.setProperty('--random-height', randomAnimationPositionHeight);
        
        //Display the bubbles on screen.
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `${random} 1s ease`;
        
        //Remove the bubbles (added divs) after the animation end;
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }
})

