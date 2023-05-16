

const CardSimple = () => {
  return (
    <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-4xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/images/footballer.png" alt="Modern building architecture" />
        </div>
        <div className="p-8">
          <h1 className="font-header">ATHLETS</h1>
          <div className="row">
            <div className="col-auto mr-10 mt-10">
              <span className="font-title">01</span>
              <div className="underline"></div>
            </div>
            <div className="col-1">
              <h2 className="font-sub-header">CONNECTION</h2>
            </div>
          </div>
          <div className="font-description">
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
      </div>
    </div>
  )
}


export default CardSimple;



