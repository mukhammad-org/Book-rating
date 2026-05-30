function Cards(){
    return (
        <>
         <div> {/*  This is a main div*/}
          <div className = " border-black border-2 rounded-2xl mt-3 flex justify-center items-center w-[60%]">
            <div className = "flex flex-row gap-3 mt-2">
             <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
             </div>{/*  This is the first card */}
             <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
             </div>{/*  This is the second card */}
             <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40" >
             </div>{/*  This is the third card */}
             </div>
             <div className = "flex flex-row gap-3 mt-2">
          <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
            </div>{/*  This is the fourth card */}
           <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
             </div>{/*  This is the fifth card */}
              <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40" >
                </div>{/*  This is the sixth card */}
            </div>
            </div>
    </div>
    </>
    )
}


function Home(){
 return (
 <>
   <div>
     <div className = "" >
        <Cards />
     </div>
   </div>
    </>
 )
}

export default Home;