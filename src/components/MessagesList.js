
import React from "react";
import Message from "./Message";

// const TEST_DATA = [
//     {
//         text: "Hello my name is Behrouz!",
//     },
//     {
//         text: "I'm Katy!",
//     },
//     {
//         text: "Alex is here!",
//     },
// ]

class MessagesList extends React.Component {
 
    render() {
        return (
            <div className="flex flex-col h-full overflow-x-auto mb-2 mt-2">
                <div className="flex flex-col h-full">

                    <div className="grid grid-cols-12 gap-y-2">
                        {
                                this.props.messages && this.props.messages.map( 
                                    (messageItem, index) => {
                                       return (<Message text={messageItem.text} key={"message"+index}/>)
                                    }
                                )
                        }

                        {
                            (this.props.messages.length === 0 && this.props.selected) && (<div className="flex col-start-1 col-end-13 p-20 justify-center">There is no message history for the current friend!</div>)
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default MessagesList