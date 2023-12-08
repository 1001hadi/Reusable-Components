import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button onClick={handleClose} primary rounded>
          Accept
        </Button>
      }
    >
      <p>Here is same importent info about this modal</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
      <p>
        Cras mollis facilisis mi, ut vulputate libero tristique id. Proin
        sollicitudin massa lorem, ut pellentesque lacus finibus eu. Sed
        dignissim, erat nec sagittis aliquam, erat ante lacinia est, et dictum
        ipsum tellus id est. Nullam in justo leo. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla cursus eu nisl ut consectetur. Duis
        sagittis at nulla ac interdum. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Quisque ipsum nisi, aliquet ac ultrices at, egestas
        non libero. Vivamus sodales tellus ligula. In at vestibulum sem.
      </p>
    </div>
  );
}

export default ModalPage;
