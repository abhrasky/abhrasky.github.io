import { useState } from "react";
import ModalVideo from 'react-modal-video';

const ContactVideoPopup = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="video-image">
                <img src="/img/video.png" alt="img" />
                <div className="video-box">
                    <a href="#" onClick={(e) => {e.preventDefault(), setOpen(true)}} className="video-btn ripple video-popup">
                        <i className="fa-solid fa-play" />
                    </a>
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="Cn4G2lZ_g2I"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default ContactVideoPopup