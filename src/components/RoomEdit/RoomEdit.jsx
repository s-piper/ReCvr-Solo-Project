import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

function RoomEdit() {

    const history = useHistory();
    const dispatch = useDispatch();
    //contains info values from selected item to edit
    const room = useSelector((store) => store.editItem);

    //sets values from inputs
    const [roomName, setRoomName] = useState('');
    const [desc, setDesc] = useState('');
    const [media, setMedia] = useState('');

    console.log('item edit page', item);

    const handleSave = () => {
        const editRoom = {
            name: roomName,
            description: desc,
            upload: media,
            id: room.id,
        }
        console.log(editRoom);

        dispatch({ type: 'EDIT_ROOM_DB', payload: editRoom })
        dispatch({ type: 'FETCH_ROOM' })

        history.push('/catalogue')
    }



    return (

        <div>
            <TextField
                onChange={(event) => setRoomName(event.target.value)}
                id="outlined-basic"
                label={item.name}
                variant="outlined"
                required />
            <br />
            <TextField
                onChange={(event) => setDesc(event.target.value)}
                id="outlined-basic"
                label={item.brand}
                variant="outlined"
                required />
            <br />
            <TextField
                onChange={(event) => setMedia(event.target.value)}
                id="outlined-basic"
                label="Picture/Video URL"
                variant="outlined" />
            <br />
            <Button
                onClick={handleSave}
                variant="contained"
                color="primary">
                Save
            </Button>


        </div>
    )
}

export default RoomEdit;