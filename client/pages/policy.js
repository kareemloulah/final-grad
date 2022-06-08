import { FaCookieBite, FaHandHoldingHeart } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { IconContext,  } from "react-icons";
import Button from "react-bootstrap/Button";
const policy = ({ courses }) => {
  return (
    <>
      <h1
        className=" text-left square container-fluid"
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "#e3edff",
        }}
      >
        Our Policy
      </h1>
      <div className="container ">
        <div>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            corrupti iusto odit quis ducimus explicabo consequatur reiciendis
            enim eum quibusdam temporibus, atque accusantium labore laudantium
            in, dicta illum quo quidem?
          </h5>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            eligendi voluptatum dolore quidem porro temporibus tempora eveniet
            doloremque est corrupti fugiat odio? Voluptatem ut quibusdam facilis
            laboriosam odit quidem qui!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias, eligendi voluptatum dolore quidem porro
            temporibus tempora eveniet doloremque est corrupti fugiat odio?
            Voluptatem ut quibusdam facilis laboriosam odit quidem qui!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            eligendi voluptatum dolore quidem porro temporibus tempora eveniet
            doloremque est corrupti fugiat odio? Voluptatem ut quibusdam facilis
            laboriosam odit quidem qui!
          </h5>
        </div>
      </div>
      <div className="container">
        <div className="row " style={{padding:"auto"}}>
          <IconContext.Provider
            value={{ className: "global-class-name ", size: "90%" , color:"#2D5EBE"}}
          >
            <Button variant="light" className="col m-5" href="/cookie" disabled style={{borderColor:"#2D5EBE" ,borderRadius:"20px"}}>
              <FaCookieBite />
              <h4 className="text-dark">Cookie</h4>
            </Button>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "90%" , color:"#2D5EBE"}}
          >
            <Button variant="light" className="col m-5" href="/policy" style={{borderColor:"#2D5EBE" ,borderRadius:"20px"}}>
              <MdPrivacyTip />
              <h4 className="text-dark">Privacy</h4>
            </Button>
          </IconContext.Provider>
          <IconContext.Provider
            value={{ className: "global-class-name", size: "90%" , color:"#2D5EBE"}}
          >
            <Button variant="light" className="col m-5" href="/terms" disabled style={{borderColor:"#2D5EBE" ,borderRadius:"20px"}}>
              <FaHandHoldingHeart />
              <h4 className="text-dark">Terms</h4>
            </Button>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
};
export default policy;
