import React, {useState} from 'react'

export const UseLocalStorage = ({item}) => {
   console.log(item)
    const localStorageItem = localStorage.getItem("items");
    let parsedItem=[];
    if (!!localStorageItem) {
       parsedItem = JSON.parse(localStorage.getItem("items"))
       parsedItem.push(item)
      localStorage.setItem("items", JSON.stringify(parsedItem));
      JSON.parse(localStorageItem)
      parsedItem =item;
    } else {
        parsedItem.push(item)
        localStorage.setItem("items", JSON.stringify(parsedItem));
    }

    

  }