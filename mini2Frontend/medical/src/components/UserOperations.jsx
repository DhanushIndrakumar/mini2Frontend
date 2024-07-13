import React from 'react';

export default function UserOperations() {
  return (
    <>
      <div>User Operations</div>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKCcWWl1Gq2oA75yM09RnWJ9LwYwA-Rm5TQ&s"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

