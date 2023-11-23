export default function Subscribe() {
    return (
        <>
            <div className="container">
                <div className="flex px-14 justify-center text-center">
                    <div className="w-full max-w-md">
                        <h1 className="capitalize text-abu font-bold text-3xl lg:text-4xl">subscribe to get the latest news about us</h1>
                        <p className="normal-case text-abu text-sm mt-3 leading-5 lg:text-xl">The above example creates three equal-width columns on small, medium large,</p>
                        <div className="md:flex justify-center">
                        <div className="md:shadow-xl mt-10 rounded-xl">
                                <input type="text" placeholder="Enter your email address" className="px-4 py-2 rounded-xl border border-abu md:border-none" />
                                <button className="hidden md:inline-flex bg-secondary px-5 py-3 mt-5 rounded-xl text-primary font font-semibold lg:text-lg">subscribe</button>
                            </div>
                        <button className="md:hidden bg-secondary px-5 py-3 mt-5 rounded-xl text-primary font font-semibold lg:text-lg">subscribe</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}