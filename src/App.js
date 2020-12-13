import './App.css'
import React from 'react'
import MessagesList from "./components/MessagesList";
import SendMessage from "./components/SendMessage";
import FriendsList from "./components/FriendsList";
import Brand from "./components/Brand";

class App extends React.Component {

  constructor(){
    super();
    
    this.friendsList = [
      {user: "Katy"},
      {user: "Alex"}, 
    ];

    this.tempMessagesStorage= {};

    this.state={
      selectedFriend: null,
      messagesList: [],
    };

    this.onSelectFriend = this.onSelectFriend.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);

  }

  addMessageToFriend(message) {
    const friend = this.state.selectedFriend;
    
    if(!friend) {
      return;
    }

    this.tempMessagesStorage[friend].push({text: message});
    this.setState({
      messagesList: this.tempMessagesStorage[friend]
    });
  }

  onSendMessage(message) {
    if(!this.state.selectedFriend){
      alert("Please Select a Friend!");
      return;
    }

    this.addMessageToFriend(message);
  }

  onSelectFriend(friend) {
    if(!this.tempMessagesStorage[friend]) {
      this.tempMessagesStorage[friend] = [];
    }
 
    this.setState({
      selectedFriend: friend, 
      messagesList: this.tempMessagesStorage[friend]
    })

  }

  render() {
    return (
      <section className='flex h-screen antialiased text-gray-800 w-full'>
        <section className='flex flex-row h-full w-full overflow-x-hidden'>
          <aside className='flex flex-col py-8 pl-5 pr-2 w-56 bg-white flex-shrink-0'>
            
            <Brand name="Chatty!"/>

            <FriendsList selected={this.onSelectFriend} friends={this.friendsList} />

          </aside>

          <aside className='flex flex-col flex-auto w-full h-full'>
            <section className='flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4'>
               
              <MessagesList selected={this.state.selectedFriend} messages={this.state.messagesList}/>

              <SendMessage send={this.onSendMessage}/>

            </section>
          </aside>

        </section>
      </section>
    )
  }

}

export default App
