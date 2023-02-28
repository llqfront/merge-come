import  React, { memo } from 'react';
import { useRouteError } from "react-router-dom";

const NotPound = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className="error_page">
      404
    </div>
  );
}
export default NotPound;
