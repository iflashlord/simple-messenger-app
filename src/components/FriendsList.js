
import React from "react";
import Friend from "./Friend";

// const TEST_DATA = [
//     {
//         user: "Katy",
//     },
//     {
//         user: "Behrouz",
//     },
//     {
//         user: "Alex",
//     },
// ]

class FriendsList extends React.Component {

    constructor(){
        super();

        this.selectedFriend = this.selectedFriend.bind(this);
    }


    selectedFriend(user) {
        this.props.selected(user);
    }

    render() {
        return (
            <div className="flex flex-col mt-8">
                <div className="flex flex-row items-center justify-between text-xs">
                    <span className="font-bold">Friends</span>
                </div>

                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-64 overflow-y-auto">
                    {
                        this.props.friends && this.props.friends.map( 
                            (friendItem, index) => {
                                return (<Friend select={this.selectedFriend} user={friendItem.user} key={"friend"+index}/>)
                            }
                        )

                    }
                </div>     
            </div> 
        )
    }

}

export default FriendsList