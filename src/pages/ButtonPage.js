import Button from "../components/Button";
import { FcApproval, FcCheckmark } from "react-icons/fc";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className="mt-5 mb-5">
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-5">
          Click It
        </Button>
      </div>
      <div>
        <Button warning rounded className="mb-5">
          <FcCheckmark />
          See Deals
        </Button>
      </div>
      <div>
        <Button danger outline rounded className="mb-5">
          <FcApproval />
          Hide Adds
        </Button>
      </div>
      <div>
        <Button success rounded className="mb-5">
          Are you sure!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
