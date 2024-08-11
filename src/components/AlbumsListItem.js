import { useDeleteAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from "./ExpandedPanel";
import { GoTrashcan } from "react-icons/go";;

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
            List of photos in the album
        </ExpandablePanel>
    )
}

export default AlbumsListItem;