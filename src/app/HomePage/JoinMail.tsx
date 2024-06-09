export default function JoinMail() {
    return(
        <>
            <div className="bg-white p-6 rounded-lg shadow-lg mx-16 md:flex flex-row my-20">
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Join Us</h2>
                    <p className="text-gray-600 mb-6 text-center mx-10">Subscribe to our newsletter to stay updated with our latest news and offers.</p>
                </div>
                
                <form className="md:w-2/3">
                    <div className="mb-4">
                        <label  className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-for text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}