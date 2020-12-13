
import React from "react";

class Message extends React.Component {

    render() {
        return (
            <div className="col-start-1 col-end-8 p-2 rounded-lg">
                <div className="flex items-center flex-row">
  
                    <div className="relative text-sm bg-white py-3 px-4 shadow rounded-xl">
                        <div>
                            {this.props.text}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Message