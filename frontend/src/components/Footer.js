import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Morawaka Hot Kitchen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // add this line to export Footer as default

