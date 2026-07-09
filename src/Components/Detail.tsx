const Detail = () => {
  return (
    <section className="w-full h-screen bg-black/10">
      <div className="flex flex-col md:flex-row  bg-black  justify-between items-center gap-10 w-full md:h-2/3">

        <div className="text-white flex flex-col  md:ml-40 items-center">
          <div className="border-4 p-2    border-white ">
            <img
              src="/clothImages/img4.png"
              className=" bg-[#d5d0d0] h-62 "
              alt=""
            />
          </div>
          <p className="font2 font-medium pt-5">Noir Column Dress</p>
        </div>
        <div className="text-white flex flex-col  items-center">
          <div className="border-4 p-2    border-white ">
            <img
              src="/clothImages/img3.png"
              className=" bg-[#d5d0d0] h-62 "
              alt=""
            />
          </div>
          <p className="font2 font-medium pt-5">Urban Flow Set</p>
        </div>
        <div className="text-white flex flex-col md:mr-40 items-center">
          <div className="border-4 p-2    border-white ">
            <img
              src="/clothImages/image1.png"
              className=" bg-[#d5d0d0] h-62 "
              alt=""
            />
          </div>
          <p className="font2 font-medium pt-5">Shadow Street Fit</p>
        </div>



      </div>
      <div className="flex flex-col gap-10 md:flex-row py-10 md:py-0 md:mt-25 text-sm md:text-md justify-between items-center">
        <div className="ca1  md:ml-10 xl:ml-55 flex gap-30 xl:gap-50">
          <div className="xl:ml-30">
            <img src="" alt="" />
            <div>
              <p className="font-bold font2">FAST DELIVERY</p>
              <p className="font-light">Quick & safe delivery</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <p className="font-bold font2">EASY RETURN</p>
              <p className="font-light">Within 15 days</p>
            </div>
          </div>
        </div>
        <div className="ca2  md:mr-10 xl:mr-55 flex gap-20  xl:gap-50">
          <div>
            <img src="" alt="" />
            <div>
              <p className="font-bold font2">QUALITY ASSURED</p>
              <p className="font-light">Best fashion, best quality</p>
            </div>
          </div>
          <div className="xl:mr-30">
            <img src="" alt="" />
            <div>
              <p className="font-bold font2">SECURE PAYMENT</p>
              <p className="font-light">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
