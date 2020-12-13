
import React from "react";

class Friend extends React.Component {
    
    render() {
        return (
            <button 
                className="flex flex-row items-center focus:outline-none hover:bg-gray-300 text-indigo-800 text-white hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white rounded-xl p-2">
                
                <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    {this.props.user && this.props.user[0]}
                </div>

                <div className="ml-2 text-sm font-semibold">{this.props.user}</div>
            </button>
        )
    }

}

export default Friend