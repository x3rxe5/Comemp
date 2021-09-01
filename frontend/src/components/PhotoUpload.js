
const PhotoUpload = ({ handlePhoto,user }) => {
    const conditionStyle = user.photo ? "bg-green-100 hover:bg-green-200 hover:border-gray-300" : "hover:bg-gray-100 hover:border-gray-300" 
    const photoUploadStyleString = "flex flex-col w-full h-32 border-4 border-blue-200 border-dashed "+conditionStyle;
    
    return (
      <div className="flex justify-center mt-8">
        <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
                { 
                    user.photo 
                    ? <p className="flex">Image Uploaded <img src="https://img.icons8.com/office/16/000000/checkmark--v2.png" alt="doneImage" className="ml-4"/></p>
                    : "File Upload" 
                }
            </label>
            <div className="flex items-center justify-center w-full">
              <label className={photoUploadStyleString}>
                <div className="flex flex-col items-center justify-center pt-7 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    {
                        user.photo ? user.photo.name : "Upload an Image"
                    }
                  </p>
                </div>
                <input 
                    type="file" 
                    className="opacity-0" 
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                />
              </label>
            </div>
          </div>          
        </div>
      </div>
    );
}

export default PhotoUpload;