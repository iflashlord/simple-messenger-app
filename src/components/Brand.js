import React from "react";

class Brand extends React.Component {

    render() {
        return (
            <div className="flex flex-row items-center justify-start h-12 w-full">
                <div className="ml-1 font-bold text-2xl">
                {this.props.name}
                </div>
            </div>
        )
    }

}

export default Brand

