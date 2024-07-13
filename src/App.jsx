import useFoxImage from "./hooks/useFoxImage"

function App() {
  
  const {foxImage, getRandomImages} = useFoxImage();

  return (
    <>
     <div className="space-y-5 my-5">
      <h1 className="text-white text-2xl text-center bg-gradient-to-r from-red-600 to-orange-700 text-transparent bg-clip-text font-extrabold">Random Fox Images</h1>
      <div>
        {foxImage && (
          <div className="space-y-3 mx-auto flex flex-col justify-center">
          <img src={foxImage.image} alt="Random Fox" className="h-48 mx-auto" />
            <button onClick={getRandomImages} className="bg-blue-500 self-center rounded-lg text-white p-2 hover:bg-black">Generate New Image</button>
          </div>
        )}
      </div>
     </div>
    </>
  )
}

export default App
