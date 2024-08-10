import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandedPanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [ addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanel>
      );
    });
  }
  return (
    <>
      <div>Albums for {user.name}
        <Button onClick={handleAddAlbum}>+Add Album</Button>
      </div>
      {content}
    </>
  );
}

export default AlbumsList;
