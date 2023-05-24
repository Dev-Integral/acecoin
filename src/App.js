
function App() {
  return (
    <div className="wrapper grid grid-cols-12">
      <div className='col-span-12 md:col-span-8'>
        <div className="form">
          <header className="form-header">
            <div className="flex justify-between items-center">
            <span className="h-[3em] w-[3em] circle-bg rounded-full"></span>
            <h1 className="blue-header text-[1.75em] font-semibold">AceCoin<span className="font-light">Pay</span></h1>
            </div>
            <div className="timer">

            </div>
          </header>
        </div>
      </div>
      <div className='col-span-12 md:col-span-4'></div>
    </div>
  );
}

export default App;
