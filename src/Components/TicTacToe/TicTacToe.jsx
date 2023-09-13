import React, { useRef, useState } from "react";
import './TicTacToe.css'
import circle_icon from '../../img/circle.png'
import cross_icon from '../../img/cross.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count,setCount] = useState(0);
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);

  const toggle = (e, num) => {
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}' class='m-12'>`
      data[num] = 'x'
      setCount(++count)
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' class='m-12'>`
      data[num] = 'o'
      setCount(++count)
    }
    checkWinner()
  }
  
  const checkWinner = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[2]!==""){
      won(data[2]);
    } else if(data[3] === data[4] && data[4] === data[5] && data[5]!==""){
      won(data[5]);
    } else if(data[6] === data[7] && data[7] === data[8] && data[8]!==""){
      won(data[8]);
    } else if(data[0] === data[3] && data[3] === data[6] && data[6]!==""){
      won(data[6]);
    } else if(data[1] === data[4] && data[4] === data[7] && data[7]!==""){
      won(data[7]);
    } else if(data[2] === data[5] && data[5] === data[8] && data[8]!==""){
      won(data[8]);
    } else if(data[0] === data[4] && data[4] === data[8] && data[8]!==""){
      won(data[8]);
    } else if(data[6] === data[4] && data[4] === data[2] && data[2]!==""){
      won(data[2]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML = `Congratulation: <img src='${cross_icon}' class='m-8 w-12 h-12'/> Wins`
    } else {
      titleRef.current.innerHTML = `Congratulation: <img src='${circle_icon}' class='m-8 w-12 h-12'/> Wins`
    }
  }

  const reset = () => {
    setLock(false)
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = `Tic Tac Toe Game In <span class="text-green-400">React</span>` 
  }
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span class="text-green-400">React</span></h1>
      <div className="board" class="h-96 w-96 m-auto flex justify-center mb-48">
        <div className="row1">
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,0)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,1)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,3)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,4)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,6)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,7)}}></div>
          <div className="boxes" class="flex rounded-xl h-44 w-44 cursor-pointer bg-gray-800 bg-opacity-50 mx-1 my-2" onClick={(e) => {toggle(e,8)}}></div>
        </div>
      </div>
      <button type="button" class='flex max-w-sm bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-md tracking-wider uppercase font-bold shadow-md rounded-2xl mx-auto p-3' onClick={()=>reset()}>Reset</button>
    </div>  
  )
}

export default TicTacToe;
