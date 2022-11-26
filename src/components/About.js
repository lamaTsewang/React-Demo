    // import React, { useState } from 'react'

    export default function AboutUs(props) {

  
        let myStyle ={
            color: props.mode === 'dark'?'white':'#042743',
            backgroundColor: props.mode === 'dark'?'#042743':'white'
        }
    return(    
            <div className='container' style={myStyle}>
                <h1 className='my-4 text-center'>{props.title}</h1>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Full Stack Developer
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                 These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
                 It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Featured Project
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                 These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  <table class="table" style={myStyle}>
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Project Title</th>
                <th scope="col">Programming Language</th>
                <th scope="col">Discription</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Car Wash Management System</td>
                <td>Java</td>
                <td>1st Year Project. Used GUI in Java</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>School Management System</td>
                <td>.net, c#</td>
                <td>2nd Year Project. Web Appllication</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Job Search Portal</td>
                <td>Php, Laravel</td>
                <td>Final Year Project</td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Work Experience
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                 These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. 
                 It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                 <div class="list-group" style={myStyle}>
                   
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Evemoo Tech</h5>
                        <small className='text-muted'>3 Months</small>
                        </div>
                        <p class="mb-1">Php Laravel</p>
                        <small className="text-muted">Intern</small>
                   
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">KTM-Doodles Creatice Studio</h5>
                        <small className="text-muted">8 Months</small>
                        </div>
                        <p class="mb-1">Java Script, React, ES6+</p>
                        <small className="text-muted">Assistance Web Application Developer</small>
            
                    </div>

            </div>
            </div>
        </div>  
        </div>
        <div className='container'>
      <button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit';
      }} type="button" className="btn btn-primary mx-1">LinkedIn Profile</button>
        </div>
     </div>   
    )
    }
