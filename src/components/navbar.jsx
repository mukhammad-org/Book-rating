function Navbar(){
    return (
    <>
    <div className = "font-bold  border-black border-2 h-14 mt-2 ml-19 mr-19 rounded-2xl">
        <h1 className = " text-2xl mt-3 ml-5 font-serif">RATE THE BOOK</h1>
      <ul className = "flex flex-row gap-10 float-right mr-20 text-1xl font-serif relative bottom-7">
        <li>MOST LIKED</li>
        <li>COMMUNITY</li>
        <li>CONTACT</li>
      </ul>
    </div> 
    </>
    )
}

export default Navbar;