import logo from "../assets/logo-512X512.png";
export default function Header() {
  return (
    <nav style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "black" }}>
      <p style={{ marginRight: "10px", color: "white", fontWeight: "100", fontSize: "27px" }}>freecodecamp</p>
      <img src={logo} alt="" height="50px" width={"50px"} />
    </nav>
  );
}
