import React from "react";

const ColorfulMessage = (props) => {
  //分割代入を使うとすっきり書ける
  const { color, children } = props;
  const contentStyle = {
    //color:colorとなる場合省略して下記の記述が出来る
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
