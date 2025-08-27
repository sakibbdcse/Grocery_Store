const Home = () => {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Grocery Store Management System</h2>
        <div>
          <a href="order.html" className="btn btn-primary me-2">
            New Order
          </a>
          <a href="manage-product.html" className="btn btn-secondary">
            Manage Products
          </a>
        </div>
      </div>

      {/* Orders Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover table-bordered align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Order Number</th>
                <th>Customer Name</th>
                <th>Total Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>2025-08-25</td>
                <td>#001</td>
                <td>John Doe</td>
                <td>$150.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal (User Profile) */}
      <div
        className="modal fade"
        id="userProfileModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h5 className="mb-3">User Profile</h5>
              <p>Name: John Doe</p>
              <p>Email: johndoe@example.com</p>
              <button
                type="button"
                className="btn btn-primary mt-2"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
