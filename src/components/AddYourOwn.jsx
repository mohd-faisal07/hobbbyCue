import { Button } from "react-bootstrap";

function AddYourOwn() {
  return (
    <div className=" mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4">
            <div className="card-header border-bottom-0 bg-transparent">
              <h5 className="card-title">
                <i
                  className="fas fa-plus-circle"
                  style={{ color: "#0096C8" }}
                />
                <span className="ms-3">
                  <strong>Add your own</strong>
                </span>
              </h5>
            </div>
            <div className="card-body">
              <p>
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and add your own page.
              </p>
              <Button variant="outline-primary">Add New</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddYourOwn;
