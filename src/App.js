import './App.css'
import React from 'react'
import MessagesList from "./components/MessagesList";
import SendMessage from "./components/SendMessage";
import FriendsList from "./components/FriendsList";
import Brand from "./components/Brand";

class App extends React.Component {

  render() {
    return (
      <section className='flex h-screen antialiased text-gray-800 w-full'>
        <section className='flex flex-row h-full w-full overflow-x-hidden'>
          <aside className='flex flex-col py-8 pl-5 pr-2 w-56 bg-white flex-shrink-0'>
            
            <Brand name="Chatty!"/>

            <FriendsList />

          </aside>

          <aside className='flex flex-col flex-auto w-full h-full'>
            <section className='flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4'>
               
              <MessagesList/>
  
              <SendMessage/>

            </section>
          </aside>

        </section>
      </section>
    )
  }

}

export default App
