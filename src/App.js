import React from 'react'
import MessageBar from "./components/MessageBar";
import MessagesList from "./components/MessagesList";
import SendMessage from "./components/SendMessage";
import FriendsList from "./components/FriendsList";
import Brand from "./components/Brand";

class App extends React.Component {

  constructor(){
    super();
    
    this.appName= "Chatty!";

    this.friendsList = [
      {user: "Katy"},
      {user: "Alex"}, 
    ];

    this.tempMessagesStorage= {};
    this.tempDraftStorage= {};

    this.state={
      selectedFriend: null,
      messagesList: [],
      draftsList: {},
    };

    this.onSelectFriend = this.onSelectFriend.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onMessageUpdated = this.onMessageUpdated.bind(this);
  }

  addMessageToFriend(message) {
    const friend = this.state.selectedFriend;
    
    if(!friend) {
      return;
    }

    this.tempMessagesStorage[friend].push({text: message});

    this.tempDraftStorage[friend] = "";

    this.setState({
      messagesList: this.tempMessagesStorage[friend],
      draftsList: {...this.tempDraftStorage}
    });
  }
 
  onSendMessage(message) {
    if(!this.state.selectedFriend){
      alert("Please Select a Friend!");
      return;
    }

    this.addMessageToFriend(message);
  }

  onMessageUpdated(message) {
    const friend = this.state.selectedFriend;
    
    if(!friend) {
      return;
    }

    if(!this.tempDraftStorage[friend]) {
      this.tempDraftStorage[friend] = "";
    }

    this.tempDraftStorage[friend] = message;

    this.setState({
      draftsList: {...this.tempDraftStorage}
    });

  }

  onSelectFriend(friend) {

    if(!this.tempMessagesStorage[friend]) {
      this.tempMessagesStorage[friend] = [];
    }
  
    this.setState({
      selectedFriend: friend, 
      messagesList: this.tempMessagesStorage[friend],
    })

  }
 

  render() {
    return (
      <section className='flex h-screen antialiased text-gray-800 w-full'>
        <section className='flex flex-row h-full w-full overflow-x-hidden'>

          <aside className='flex flex-col py-8 pl-5 pr-2 w-56 bg-white flex-shrink-0'>
            
            <Brand name={this.appName}/>

            <FriendsList selected={this.onSelectFriend} friends={this.friendsList} />

          </aside>

          <aside className='flex flex-col flex-auto w-full h-full'>

            <section className='flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4'>
               
              <MessageBar selected={this.state.selectedFriend} />

              <MessagesList selected={this.state.selectedFriend} messages={this.state.messagesList}/>

              <SendMessage send={this.onSendMessage} updateMessage={this.onMessageUpdated} draftedData={this.tempDraftStorage[this.state.selectedFriend]}/>

            </section>

          </aside>

        </section>
      </section>
    )
  }

}

export default App
