import React from 'react';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
  <a class="navbar-brand" href="#">Agri product online purchasing platform</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
      
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;