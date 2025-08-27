const OrderManage = () => {
  return (
    <>
      <div className="container">
        <div className="header content rows-content-header">
          <button className="button-menu-mobile show-sidebar">
            <i className="fa fa-bars"></i>
          </button>
          <div className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav visible-lg visible-md limit-chars">
                  <ul className="breadcrumb">
                    <a href="index.html">
                      <i
                        className="zmdi zmdi-view-dashboard zmdi-hc-fw"
                        title="Orders"
                      ></i>
                    </a>
                    <a href="manage-product.html">
                      <i
                        className="zmdi zmdi-assignment zmdi-hc-fw"
                        title="Products"
                      ></i>
                    </a>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="right content-page">
          <div className="body content rows scroll-y">
            <div className="box-info full" id="taskFormContainer">
              <h2>Manage Products</h2>
              <div className="panel-body pt-0">
                <div className="row mb-4">
                  <div className="col-sm-12">
                    <button
                      type="button"
                      className="btn btn-sm btn-primary pull-right"
                      data-toggle="modal"
                      data-target="#productModal"
                    >
                      Add New Product
                    </button>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <th>Name</th>
                    <th>Unit</th>
                    <th>Price Per Unit</th>
                    <th>Action</th>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade-scale"
          id="productModal"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Product</h4>
              </div>
              <div className="modal-body">
                <form id="productForm">
                  <input type="hidden" name="id" id="id" value="0" />
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          id="name"
                          type="text"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Unit</label>
                        <select
                          name="uoms"
                          id="uoms"
                          className="form-control"
                        ></select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Price Per Unit</label>
                        <input
                          className="form-control"
                          placeholder="Price Per Unit"
                          name="price"
                          id="price"
                          type="text"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="saveProduct"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderManage;
