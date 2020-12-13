import './App.css'
import React from 'react'
import MessagesList from "./components/MessagesList";
import FriendsList from "./components/FriendsList";

class App extends React.Component {

  render() {
    return (
      <section className='flex h-screen antialiased text-gray-800 w-full'>
        <section className='flex flex-row h-full w-full overflow-x-hidden'>
          <aside className='flex flex-col py-8 pl-5 pr-2 w-56 bg-white flex-shrink-0'>
            <div className='flex flex-row items-center justify-start h-12 w-full'>
              <div className='ml-1 font-bold text-2xl'>
                Chatty!
              </div>
            </div>

            <FriendsList />

          </aside>
          <aside className='flex flex-col flex-auto w-full h-full'>
            <section className='flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4'>
               
              <MessagesList/>
  
              <form className='flex flex-row items-center h-16  bg-white w-full px-4'>
                <div className='flex-grow ml-0'>
                  <div className='relative w-full'>
                    <input type='text' placeholder='Type your message here...' className='flex w-full border-2 rounded-3xl focus:outline-none focus:border-indigo-800 pl-4 h-10' />
                  </div>
                </div>
                <div className='ml-4'>
                  <button type='submit' className='flex items-center justify-center h-10 w-10 focus:outline-none rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white'>
                    <svg
                      className='w-5 h-5 transform rotate-90 -mr-px'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'></path>
                    </svg>
                  </button>
                </div>
              </form>
            </section>
          </aside>
        </section>
      </section>
    )
  }

}

export default App
