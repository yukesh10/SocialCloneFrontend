import React from 'react'

const Postview = (props) => {
    const {user ,time , des, postimage} = props;

  return (
    <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
                <div className="card-body p-0 d-flex">
                    <figure className="avatar me-3"><img src={`http://sociala.uitheme.net/assets/images/user-7.png`} alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1"> {user} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> {time}</span></h4>
                    <div className="ms-auto pointer"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></div>
                </div>
                <div className="card-body p-0 me-lg-5">
                    <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-2">{des} <a href="/" className="fw-600 text-primary ms-2">See more</a></p>
                </div>
                {postimage ?
                <div className="card-body d-block p-0 mb-3">
                    <div className="row ps-2 pe-2">
                        <div className="col-sm-12 p-1"><img src={`http://sociala.uitheme.net/assets/images/t-10.jpg`} className="rounded-3 w-100" alt="post" /></div>                                        
                    </div>
                </div>
                : ''}
                <div className="card-body d-flex p-0">
                    <div className="emoji-bttn pointer d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-2"><i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</div>
                    <a href="/" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i><span className="d-none-xss">22 Comment</span></a>
                </div>
            </div>
  )
}

export default Postview;