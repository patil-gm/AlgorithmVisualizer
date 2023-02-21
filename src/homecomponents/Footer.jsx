import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import './style.css'

function Footer() {
  return (
    <div>
     
    
        <div className="footer">
           <p>   This website was made by PICT 2nd Year Student .....! ❤️ 🚀</p>
           <p>connect with me on github <span> </span><GitHubButton href="https://github.com/patil-gm"  aria-label="Follow @patil-gm on GitHub">Follow @patil-gm</GitHubButton>
           </p>

          <div class="footer-copyright text-center py-3">© 2020 Copyright Reserved @ Ghanashyam Patil</div>  
        </div>
    </div>
  )
}

export default Footer


