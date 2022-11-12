import { useEffect, useRef } from 'react';

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudeName: 'dwiso1uky',
            uploadPreset: 'bleepblorp'
        }, function(error, result) {
            console.log(result);
        })
    }, [])
    return (
        <button type="button" onClick={()=> widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget
