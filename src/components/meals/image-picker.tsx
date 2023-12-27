"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

type Props = {
    label: string;
    name: string;
};
export const ImagePicker: React.FC<Props> = ({ label, name }) => {
    const imageInput = useRef<HTMLInputElement | null>(null);
    const [pickedImage, setPickedImage] = useState<any>();

    const handlePickClick = () => {
        imageInput.current?.click();
    };

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="The image selected by the user." fill />
                    )}
                </div>
                <input
                    hidden
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
};
