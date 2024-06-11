import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Person, Search } from "react-bootstrap-icons";
import OffMenu from "./OffMenu";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "유아",
    "아동",
    "여성",
    "남성",
    "H&M HOME",
    "스포츠",
    "sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    // navigate(내가 가고 싶은 주소를 적는다)
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };

  const search = (e) => {
    e.preventDefault();
    console.log("keyDown");
    if (e.key === "Enter") {
      console.log("enter를 클릭했어요~~!!", e.key);
      let keyword = e.target.value;
      console.log("keyword : ", keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <>
      <Container>
        {authenticate ? (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div
              className="ms-2 pointer"
              onClick={() => {
                setAuthenticate(false);
              }}
            >
              로그아웃
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Person />
            <div className="ms-2 pointer" onClick={goToLogin}>
              로그인
            </div>
          </div>
        )}

        <div className="text-center d-none d-md-block mt-4">
          <img
            src="../images/logo.png"
            alt="로고"
            width="80px"
            onClick={home}
            className="pointer"
          />
        </div>
        <div className="d-none d-md-block">
          <Row className="mt-5">
            <Col lg={2}></Col>
            <Col lg={8} className="text-center">
              <ul className="list-unstyled d-flex justify-content-center mt-2">
                {menuList.map((menu) => (
                  <li className="ms-3 fw-bold">{menu}</li>
                ))}
              </ul>
            </Col>
            <Col lg={2}>
              <form
                class="d-flex justify-content-end align-items-center"
                role="search"
              >
                <Search />
                <input
                  class="form-control me-2 border-0 border-bottom"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onKeyDown={(event) => search(event)}
                />
              </form>
            </Col>
          </Row>
        </div>
        <div className="d-md-none">
          <OffMenu />
          <img
            src="../images/logo.png"
            alt="로고"
            width="50px"
            onClick={home}
            className="pointer"
          />
        </div>
      </Container>
    </>
  );
};

export default Navbar;
