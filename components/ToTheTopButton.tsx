"use client"
import React, { useState } from "react"

const ToTheTopButton = () => {
  const [showBtn, setShowBtn] = useState("myBtnTodo none")

  // When the user scrolls down 20px from the top of the document, show the button

  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtnTodo")
    } else {
      setShowBtn("none")
    }
  }

  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div>
      <button
        onClick={topFunction}
        id="myBtnTodo"
        className={showBtn}
        title="Go to top"
      >
        Upp
      </button>
    </div>
  )
}

export default ToTheTopButton
