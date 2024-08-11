import { useDeleteAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from "./ExpandedPanel";
import PhotosList from './PhotosList';
import { GoTrashcan } from "react-icons/go";

function AlbumsListItem({album}) {
    const [deleteAlbum, results] = useDeleteAlbumMutation();
    const handleDeleteAlbum = () => {
        deleteAlbum(album);
    }
    const header = (
        <>
            {album.title}
            <Button loading={results.isLoading} onClick={handleDeleteAlbum}>
                <GoTrashcan/>
            </Button>
        </>
    );
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    )
}

export default AlbumsListItem;