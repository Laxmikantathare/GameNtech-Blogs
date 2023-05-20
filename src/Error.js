import React from 'react'

export default function Error() {
  return (
    <>

<div className="page-wrap d-flex flex-row align-items-center">
    <div className="container"style={{background:" linear-gradient(to right, #b6fbff, #83a4d4)"}}>
        <div className="row justify-content-center" style={{margin: "128px"}}>
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
                <a href="/" className="btn btn-link">Back to Home</a>
            </div>
        </div>
    </div>
</div>

    </>
  )
}
