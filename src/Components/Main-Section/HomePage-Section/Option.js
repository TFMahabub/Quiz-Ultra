import React, { useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import CorrectAnswer from './CorrectAnswer';
  import WrongAnswer from './WrongAnswer';
  import Swal from 'sweetalert2'

const Option = ({option, correctAnswer, seen}) => {

  if(seen){
    Swal.fire({
      position: 'center',
      // icon: 'success',
      title: correctAnswer,
      showConfirmButton: false,
      timer: 2500
    })
  }
  
  const handelerClickedOption = (clickedOption) =>{
    const checkAnswer = correctAnswer === clickedOption;


    if(checkAnswer){
      Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Answer is Correct :)',
      showConfirmButton: false,
      timer: 2500
    })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Sorry your Answer is Wrong :(',
        showConfirmButton: false,
        timer: 2500
      })
    }
  }
  return (
    <div onClick={() => handelerClickedOption(option)} className={`border-2 border-[#179AB4] rounded-md p-3 hover:bg-[#d7f1f5] cursor-pointer `}>
      <h4>{option}</h4>
    </div>
  );
};

export default Option;