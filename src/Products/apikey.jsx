import React from 'react'

export const apikey = () => {
  const username = 'ck_dac04fc75c7fc78253d72667828791d8092cce4e';
const password = 'cs_ba039cc4c3d0794a6f2d281f941bfbb21910a87a';
const auth = btoa(`${username}:${password}`);
  return auth;
}
