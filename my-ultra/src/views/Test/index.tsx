import React, { memo } from 'react';
interface Props {
}
const View: React.FC = (props: Props) => {

    return (
      <React.Fragment>
        <div>test</div>
      </React.Fragment>
    )
}
export default memo(View);
