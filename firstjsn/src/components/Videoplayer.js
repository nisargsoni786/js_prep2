import ReactPlayer from 'react-player'

import React from 'react'

function Videoplayer() {
    return (
        <div>
            <ReactPlayer
                url="https://youtu.be/luai0p0y2zE"
                controls
                playbackRate = {2}
                width = "896px"
                height = "504px"
            />
        </div>
    )
}

export default Videoplayer
