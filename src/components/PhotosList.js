import { useFetchPhotosQuery, useAddPhotoMutation } from "../store/apis/photosApi";
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

function PhotosList({ album }) {
    const { data, isFetching, error } = useFetchPhotosQuery(album);
    const [ addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4} />;
    } else if (error) {
        content = <div>Error fetching photos...</div>;
    } else {
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />;
        });
    }

    return (
        <div>
            <h3 className="text-lg font-bold">Photos In {album.title}</h3>
            <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
            {content}
        </div>
    )
}

export default PhotosList;