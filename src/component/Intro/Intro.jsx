import './intro.scss'
import { init } from 'ityped'
import { useEffect,useRef } from 'react';


function Intro() {
    const textRef = useRef();
    useEffect(() => { init(textRef.current,{ showCursor: false, strings: ['React','Node','javaScript']})   
    },[])
    
    

   
    return (
      <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/hari.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="details">
            <h2>Hey There,I'm</h2>
            <h1>Hari Mukkamula</h1>
            <h3>
              Web Developer <span ref={textRef}></span>{" "}
            </h3>

            <div className="box">
              <h3 className="p">Profile</h3>
              <p>
                Proficient in an assortment of technologies like HTMl, CSS,
                JavaScript, React and Deployments by using Docker, Kubernets
                implementing CI/CD pipelines using tools like Jenkins and Skilled in
                leveraging Terraform and Ansible for infrastructure as code
                (IaC) and configuration management. Able to effectively
                self-manage during independent projects, as well as collaborate
                in a team setting.
              </p>
            </div>
          </div>
          <a href="#porto">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    );
}

export default Intro;
