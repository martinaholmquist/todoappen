"use client"
import React, { useState } from "react"

const ToTheTopButton = () => {
  const [showBtn, setShowBtn] = useState("myBtn none")

  // When the user scrolls down 20px from the top of the document, show the button

  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn")
    } else {
      setShowBtn("none")
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div>
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        Upp
      </button>
    </div>
  )
}

export default ToTheTopButton
