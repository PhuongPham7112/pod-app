import '../ComponentsCSS/PodPost.css';
import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import GradeIcon from '@material-ui/icons/Grade';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function PodPost(audioFile) {

    const audioRef = useRef(null);
    // keep track of the current play time
    const [currentTime, setCurrentTime] = useState(0);
    // keep track of the duration of the audio file
    const [duration, setDuration] = useState(0);
    // keep strack of the play state
    const [isPlay, setPlay] = useState(false);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) {
            audioRef.current.play();
        };
      };
    
    const handlePausePlayClick = () => {
    if (isPlay) {
        audioRef.current.pause();
    } else {
        audioRef.current.play();
    }
    setPlay(!isPlay);
    };

    const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
        setPlay(true);
        audioRef.current.play();
    }
    };

    return (
        <div className="pod-post-container"> 
            <div className="pod-content">
                <h1 className="pod-title"> {audioFile.title} </h1>
                <div className="pod-row2">
                    <p className="pod-category"> {audioFile.category} </p>
                    <p className="pod-date"> {audioFile.date} </p>
                    <p className="pod-author"> by {audioFile.author} </p>
                </div>
                <div className="pod-player">
                    <div onClick={handlePausePlayClick}>
                        {isPlay ? <PauseCircleFilledIcon className="play-pause-button"/> : <PlayCircleFilledIcon className="play-pause-button"/>}
                    </div>
                    <TimeSlider className="pod-slider"
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}
                        styles={{
                            track: {
                                backgroundColor: "#e3e3e3",
                                width: "90%",
                                justifySelf: "center"
                            },
                            active: {
                                backgroundColor: "#ff8383"
                            }
                            }}
                    />
                    <audio
                        ref={audioRef}
                        src={audioFile.src}
                        onLoadedData={handleLoadedData}
                        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                        onEnded={() => setPlay(false)}
                    />
                </div>
                <div className="pod-time">
                    <p> {Math.floor(currentTime / 60)}:{Math.floor(currentTime - Math.floor(currentTime / 60)*60)}/{Math.floor(duration / 60)}:{Math.floor(duration - Math.floor(duration / 60)*60)} </p>
                </div>
                <div className="pod-other-buttons-container">
                    <GradeIcon/>
                    <ChatBubbleIcon/>
                    <BookmarkIcon/>
                </div>
            </div>
        </div>
    )
}