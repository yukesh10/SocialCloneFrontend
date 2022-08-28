import React from 'react'

const Createpost = () => {

    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
            <div className="card-body p-0">
                <a href="/" className="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"><i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>Create Post</a>
            </div>
            <div className="card-body p-0 mt-3 position-relative">
                <figure className="avatar position-absolute ms-2 mt-1 top-5"><img src="http://sociala.uitheme.net/assets/images/user-8.png" alt="icon" className="shadow-sm rounded-circle w30" /></figure>
                <textarea name="message" className="h100 bor-0 w-100 rounded-xxl p-2 ps-5 font-xssss text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?"></textarea>
            </div>
            <div className='d-flex justify-content-end'>
                <a href="/" className="p-2 lh-20 w100 bg-blue-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Post</a>
            </div>
        </div>
    )
}

export default Createpost;