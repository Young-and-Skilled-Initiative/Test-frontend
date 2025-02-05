const PageForm = ({ className }: { className: string }) => {
    return (
        <div className={`md:max-w-[70%] w-full md:h-[85vh] h-full flex flex-col mx-auto px-8 py-16 bg-white rounded-xl ${className} shadow-2xl`}>
            <div className="mb-4 flex flex-col">
                {/* Full Name and Email Row */}
                <div className="flex md:flex-row flex-col mb-4 gap-8">
                    <div className="w-full pr-2">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="John David"
                            className="shadow appearance-none w-full border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div className="w-full pl-2">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            required
                        />
                    </div>
                </div>

                {/* Company and Subject Row */}
                <div className="flex md:flex-row flex-col mb-4 gap-8">
                    <div className="w-full pr-2">
                        <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company name here"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            required
                        />
                    </div>

                    <div className="w-full pl-2">
                        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                            Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                            required
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div className="w-full px-2">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Hello there, I would like to talk about how to..."
                        className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-64"
                        required
                    />
                </div>
            </div>

            <button className="bg-black/80 text-white/80 hover:text-white font-bold py-4 px-6 rounded-full w-fit text-xs">Send Message</button>
        </div>
    );
};

export default PageForm;
