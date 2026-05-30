function Cards(){
    return (
        <>
<div className = "flex flex-row gap-3 ml-30">
    <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">

    </div>
     <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
        
    </div>
     <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40" >
        
    </div>
    </div>
    <div className = "flex flex-row ml-30">
    <div>

    </div>
     <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">

    </div>
     <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40">
        
    </div>
     <div className = "flex flex-row gap-1 border-black border-2 h-60 w-[10%] m-20 p-40" >
        
    </div>
   
    </div>
    </>
    )
}


function Home(){
 return (
 <>
   <div className = "border-black border-2 h-dvh ml-20 mr-20 mt-3 rounded-2xl ">
     <div>
        <Cards />
     </div>
   </div>
    </>
 )
}

export default Home;