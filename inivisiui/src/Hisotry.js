import React from "react";
import createFragment from "react-addons-create-fragment";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import Avatar from "material-ui/Avatar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
function History(props) {
  // console.log(props);
  var reactMsgs = props.messages.map((msg, i) => {
    console.log(msg);
    return (
      <div key={i}>
        <ListItem disabled={true} leftAvatar={<Avatar src={msg.img} />}>
          {msg.message}
        </ListItem>
      </div>
    );

    // } else {
    //   return(
    //     <div key={i}>
    //       <ListItem disabled={true} rightAvatar={<Avatar src={msg.img.logo} />}>
    //         {msg.message}
    //       </ListItem>
    //     </div>
    //   );
    // }
  });
  console.log(reactMsgs);
  return (
    <div>
      <List>
        <div>
          {reactMsgs}
        </div>
      </List>
    </div>
  );
}

export default History;
