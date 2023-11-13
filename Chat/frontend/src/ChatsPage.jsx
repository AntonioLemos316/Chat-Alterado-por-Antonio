import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return( 
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='15ef9dd4-a4ba-4622-9449-316b1f24dde2'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
    </div> 
    )
}

export default ChatsPage