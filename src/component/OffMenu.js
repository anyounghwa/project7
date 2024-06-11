import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {List} from 'react-bootstrap-icons'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const menuList = ['유아', '아동', '여성', '남성', 'H&M HOME','스포츠', 'sale', '지속가능성']
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      <List onClick={handleShow} size={50}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='list-unstyled mt-2'>
            {menuList.map(menu => <li className='ms-3 fw-bold'>{menu}</li>)}
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;