import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Layout from "../../components/layout";


const ChatPage = () => {

    return (
        <Layout>
            <div className="flex flex-col">
                <BreadCrumb title='chat-room' />
            </div>
        </Layout>
    );
}

export default ChatPage;