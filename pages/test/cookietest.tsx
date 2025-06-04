import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import _createtoken from '@/utils/createtoken';

function Cookietest() {

  let data = {
    name: 'earth',
    userid: '1234',
    login: 1
  }

  useEffect(() => {


    let str = _createtoken(data)
    console.log(str);
    if (str) {
      Cookies.set('login', str, { secure: true, expires: 1 })
    }

    console.log(Cookies.get('login'));
  }, [])

  return (
    <div>cookietest</div>
  )
}

export default Cookietest