import React, { useState} from "react";
import axios from 'axios';


const RamdomImage = () => {

    const [imageUrl, setImageUrl] = useState('https://picsum.photos/200/300?random=1')
    const changeImage = async () => {
        try {
            const url = await axios.get("https://picsum.photos/400/300", { responseType:"blob" })
            const file = new FileReader();
            file.readAsDataURL(url.data);
            file.onload = () => { setImageUrl(file.result); }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="col-md-12 d-flex justify-content-center p-2">
            <div className="rounded-pill bg-primary">
                <img src={imageUrl} alt="ramdomImage" />
            </div>
            <button className="btn btn-primary" onClick={changeImage}>get ramdom image</button>
        </div>
    )
}

export default RamdomImage