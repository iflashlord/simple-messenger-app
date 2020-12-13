
import React from "react";

class MessageBar extends React.Component {

    render() {
        return (
            <div className="flex flex-row items-center h-16 bg-white w-full px-4 p-4 text-xl">
            {this.props.selected || "Please Select a Friend!"}  
            </div>
        )
    }

}

export default MessageBar