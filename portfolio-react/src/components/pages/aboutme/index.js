import React from "react";
import "./index.css";

function Aboutme() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-9'>
                    <h3>About Me</h3>
                    <p
                        className='past'
                        style={{ textAlign: "justify", textJustify: "auto" }}>
                        While I was in highschool I took some tech courses of
                        coding in Visual Fox Pro and Visual Basic, helping my
                        classmates to type, fix and run their code was fun. I
                        remember coding little desktop apps connected with local
                        databases, back then that was mind blowing for me. That
                        got me wondering.. How would it be working as a
                        developer? And here I am.
                    </p>
                    <p
                        className='future'
                        style={{ textAlign: "justify", textJustify: "auto" }}>
                        Motivated person with great verbal and written
                        communication, problem-solving skills, always oriented
                        to customer service. Certified by the University of
                        Minnesota as a Full Stack Web Developer with a valid
                        accreditation of background education as a Bachelor of
                        Science in Computer Science major area of study Software
                        Engineering. Experience in web development projects with
                        RESTFUL API’s. Focused always on integrating best
                        practices in all of my roles and keep learning new
                        technologies to achieve the best results. Over the past
                        10 years, I have had to work in many different roles
                        including IT Support, Computer Science Teacher, and
                        technology entrepreneur enthusiast in web digital
                        signage solutions. Ready to contribute my experience and
                        skills with your company.
                    </p>
                </div>
                <div
                    className='col-sm-12 col-md-3'
                    style={{ textAlign: "center" }}>
                    <img
                        className='profile-pic'
                        src='/../../../img/profile1.JPG'
                        alt='jorge calderon fullstack web developer'
                    />
                    <p style={{ marginTop: "2%" }}>
                        FullStack Web Developer Bloomington, MN
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-12'>Let's connect:</div>
                <div className='col-sm-12 col-md-12'>
                    <a
                        href='https://www.linkedin.com/in/jorge-calderon-143480187'
                        alt='Jorge Calderon FullStack Web Developer LinkdeIn Profile'>
                        <span
                            class='fa fa-linkedin-square'
                            style={{ fontSize: "32px" }}
                            aria-hidden='true'
                        />{/*  */}LinkedIn
                    </a>
                    <span> | </span>
                    <a
                        href='https://github.com/jlcalderon'
                        alt='Jorge Calderon FullStack Web Developer Github Repositories'>
                        <span
                            class='fa fa-github-square'
                            style={{ fontSize: "32px" }}
                            aria-hidden='true'
                        />{/*  */}Github
                    </a>
                    <span> | </span>
                    <a
                        href='https://stackoverflow.com/users/13569142/jlc'
                        alt='Jorge Calderon FullStack Web Developer Stack-Overflow Q/A posts'>
                        <span
                            class='fa fa-stack-overflow'
                            style={{ fontSize: "32px" }}
                            aria-hidden='true'
                        />{/*  */}Stackoverflow
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;
