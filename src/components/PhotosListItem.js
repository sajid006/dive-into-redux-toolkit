import { GoTrashcan } from "react-icons/go";
import { useDeletePhotoMutation } from '../store';

function PhotosListItem({photo}) {
    const [deletePhoto] = useDeletePhotoMutation();

    const handleDeletePhoto = () => {
        deletePhoto(photo);
    };

    return (
        <div onClick={handleDeletePhoto}>
            <img src={photo.url} alt="random pic" />
            <div>
                <GoTrashcan className="text-3xl" />
            </div>
        </div>
    )
}

export default PhotosListItem;