import React, { memo, useEffect, useState, useRef } from 'react';
import type { RootState } from '@/stores';
import { useSelector, useDispatch } from 'react-redux'

const View: React.FC = (props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <React.Fragment>
        <div>dsaf运{count}营sdfa</div>
    </React.Fragment>

  )
}
export default View;
