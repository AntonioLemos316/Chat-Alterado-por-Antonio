import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="e656fe09-939a-4b37-ad49-a5dcb119782f"
        // eslint-disable-next-line react/prop-types
        username={props.user.username}
        // eslint-disable-next-line react/prop-types
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
